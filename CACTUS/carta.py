import pygame

class Carta:
    def __init__(self, seme, valore, x, y, face, width=100, height=150, angle=0):
        self.seme = seme
        self.valore = valore
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.angle = angle  # Angolo di rotazione in gradi
        self.face_up = face
        
        # Carica e ridimensiona le immagini
        self.original_image = pygame.image.load(f'cards/{valore}_{seme}.png')
        self.original_image = pygame.transform.scale(self.original_image, (width, height))
        
        self.original_back_image = pygame.image.load('cards/dorso_1.png')
        self.original_back_image = pygame.transform.scale(self.original_back_image, (width, height))
        
        # Crea le immagini ruotate iniziali
        self.image = self.rotate_image(self.original_image, angle)
        self.back_image = self.rotate_image(self.original_back_image, angle)
        
        # Aggiorna il rettangolo considerando la rotazione
        self.update_rect()

    def rotate_image(self, image, angle):
        """Ruota un'immagine mantenendo il centro"""
        if angle == 0:
            return image
        
        # Ruota l'immagine
        rotated_image = pygame.transform.rotate(image, angle)
        
        # Ottieni il nuovo rettangolo centrato
        new_rect = rotated_image.get_rect(center=image.get_rect(center=(self.x, self.y)).center)
        
        return rotated_image

    def update_rect(self):
        """Aggiorna il rettangolo di collisione considerando la rotazione"""
        if self.angle == 0:
            self.rect = pygame.Rect(self.x, self.y, self.width, self.height)
        else:
            # Per angoli diversi da 0, usa il rettangolo dell'immagine ruotata
            current_image = self.image if self.face_up else self.back_image
            self.rect = current_image.get_rect(center=(self.x + self.width//2, self.y + self.height//2))

    def set_angle(self, angle):
        """Imposta un nuovo angolo di rotazione"""
        self.angle = angle
        self.image = self.rotate_image(self.original_image, angle)
        self.back_image = self.rotate_image(self.original_back_image, angle)
        self.update_rect()

    def rotate(self, angle_delta):
        """Ruota la carta di un angolo specificato (in gradi)"""
        self.angle = (self.angle + angle_delta) % 360
        self.image = self.rotate_image(self.original_image, self.angle)
        self.back_image = self.rotate_image(self.original_back_image, self.angle)
        self.update_rect()

    def draw(self, screen):
        if self.face_up:
            # Disegna l'immagine ruotata nella posizione corretta
            rect = self.image.get_rect(center=(self.x + self.width//2, self.y + self.height//2))
            screen.blit(self.image, rect)
        else:
            # Disegna il retro ruotato
            rect = self.back_image.get_rect(center=(self.x + self.width//2, self.y + self.height//2))
            screen.blit(self.back_image, rect)

    def is_clicked(self, pos):
        """Controlla se la posizione del mouse è dentro la carta ruotata"""
        return self.rect.collidepoint(pos)

    def flip(self):
        self.face_up = not self.face_up

    def move(self, x, y):
        """Muove la carta a una nuova posizione"""
        self.x = x
        self.y = y
        self.update_rect()
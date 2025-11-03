import pygame,sys
from carta import Carta
from start_screen import StartScreen

# Costanti
WINDOWS_WIDTH = 1200
WINDOWS_HEIGHT = 900
HIGHLIGHT_COLOR = (255, 255, 0)

class Game:
    def __init__(self):
        # Pygame setup
        pygame.init()
        pygame.mixer.init()
        self.screen = pygame.display.set_mode((0,0), pygame.FULLSCREEN)
        pygame.display.set_caption("CACTUS")
        self.clock = pygame.time.Clock()

        # Caricamento del background
        self.background = self.load_background()
        
        # Caricamento della soundtrack
        self.load_soundtrack()
        
        # Variabili di gioco
        self.selected_card = None
        self.drag_offset_x = 0
        self.drag_offset_y = 0
        
        # Inizializza le carte
        self.initialize_cards()
    
    def load_background(self):
        """Carica e prepara l'immagine di background"""
        try:
            background = pygame.image.load("background.jpg").convert()
            # Ridimensiona l'immagine per adattarla alla finestra
            background = pygame.transform.scale(background, (WINDOWS_WIDTH, WINDOWS_HEIGHT))
            print("Background caricato con successo!")
            return background
        except pygame.error as e:
            print(f"Errore nel caricamento del background: {e}")
            # Crea un background di fallback
            fallback_bg = pygame.Surface((WINDOWS_WIDTH, WINDOWS_HEIGHT))
            fallback_bg.fill((50, 120, 80))  # Verde cactus come fallback
            return fallback_bg
    
    def load_soundtrack(self):
        """Carica e avvia la soundtrack"""
        try:
            pygame.mixer.music.load("sound/cactustheme_01.mp3")
            pygame.mixer.music.set_volume(0.7)
            pygame.mixer.music.play(-1)  # Loop infinito
            print("Soundtrack caricata con successo!")
        except pygame.error as e:
            print(f"Errore nel caricamento della soundtrack: {e}")
    
    def initialize_cards(self):
        """Inizializza tutte le carte del gioco"""
        # Creazione delle carte - POSIZIONATE VICINO AI BORDI
        self.carte_player = [
            Carta("cuori", "10", WINDOWS_WIDTH/8*1, WINDOWS_HEIGHT - 150, True),
            Carta("cuori", "10", WINDOWS_WIDTH/8*2, WINDOWS_HEIGHT - 150, False),
            Carta("cuori", "10", WINDOWS_WIDTH/8*3, WINDOWS_HEIGHT - 150, False),
            Carta("cuori", "10", WINDOWS_WIDTH/8*4, WINDOWS_HEIGHT - 150, False)
        ]

        self.carte_player2 = [
            Carta("cuori", "10", WINDOWS_WIDTH - 150, WINDOWS_HEIGHT/8*1, True, angle=90),
            Carta("cuori", "10", WINDOWS_WIDTH - 150, WINDOWS_HEIGHT/8*2, False, angle=90),
            Carta("cuori", "10", WINDOWS_WIDTH - 150, WINDOWS_HEIGHT/8*3, False, angle=90),
            Carta("cuori", "10", WINDOWS_WIDTH - 150, WINDOWS_HEIGHT/8*4, False, angle=90)
        ]

        self.carte_player3 = [
            Carta("cuori", "10", WINDOWS_WIDTH/8*1, 50, True),
            Carta("cuori", "10", WINDOWS_WIDTH/8*2, 50, True),
            Carta("cuori", "10", WINDOWS_WIDTH/8*3, 50, True),
            Carta("cuori", "10", WINDOWS_WIDTH/8*4, 50, True)
        ]

        self.carte_player4 = [
            Carta("cuori", "10", 50, WINDOWS_HEIGHT/8*1, True, angle=90),
            Carta("cuori", "10", 50, WINDOWS_HEIGHT/8*2, False, angle=90),
            Carta("cuori", "10", 50, WINDOWS_HEIGHT/8*3, False, angle=90),
            Carta("cuori", "10", 50, WINDOWS_HEIGHT/8*4, False, angle=90)
        ]

        # Lista di tutte le carte per facilitare il controllo
        self.all_cards = (self.carte_player + self.carte_player2 + 
                         self.carte_player3 + self.carte_player4)
    
    def handle_events(self):
        """Gestisce tutti gli eventi del gioco"""
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                return False
            
            # Gestione click del mouse
            elif event.type == pygame.MOUSEBUTTONDOWN:
                if event.button == 1:  # Click sinistro
                    pos = pygame.mouse.get_pos()
                    
                    # Controlla se una carta è stata cliccata
                    for carta in self.all_cards:
                        if carta.is_clicked(pos):
                            self.selected_card = carta
                            # Calcola l'offset per un drag fluido
                            self.drag_offset_x = carta.x - pos[0]
                            self.drag_offset_y = carta.y - pos[1]
                            break
                
                elif event.button == 3:  # Click destro - gira la carta
                    pos = pygame.mouse.get_pos()
                    for carta in self.all_cards:
                        if carta.is_clicked(pos):
                            carta.flip()
                            break
            
            # Rilascia la carta quando il mouse viene rilasciato
            elif event.type == pygame.MOUSEBUTTONUP:
                if event.button == 1:
                    self.selected_card = None
            
            # Gestione tastiera per rotazione
            elif event.type == pygame.KEYDOWN:
                if self.selected_card:
                    if event.key == pygame.K_r:
                        self.selected_card.rotate(15)  # Ruota a destra
                    elif event.key == pygame.K_l:
                        self.selected_card.rotate(-15)  # Ruota a sinistra
                    elif event.key == pygame.K_0:
                        self.selected_card.set_angle(0)  # Resetta rotazione
        
        return True
    
    def update(self):
        """Aggiorna lo stato del gioco"""
        # Movimento della carta con il mouse
        if self.selected_card:
            pos = pygame.mouse.get_pos()
            self.selected_card.move(pos[0] + self.drag_offset_x, pos[1] + self.drag_offset_y)
    
    def draw(self):
        """Disegna tutto il gioco"""
        # Sfondo - CORRETTO: usa blit con (surface, (x, y))
        self.screen.blit(self.background, (0, 0))
        
        # Disegna tutte le carte
        for carta in self.all_cards:
            carta.draw(self.screen)
        
        # Highlight della carta selezionata
        if self.selected_card:
            highlight_rect = self.selected_card.rect.inflate(10, 10)
            pygame.draw.rect(self.screen, HIGHLIGHT_COLOR, highlight_rect, 3)
    
    def run(self):
        """Esegue il loop principale del gioco"""
        running = True
        while running:
            # Gestione eventi
            running = self.handle_events()
            
            # Aggiornamento
            self.update()
            
            # Disegno
            self.draw()
            
            # Aggiornamento schermo
            pygame.display.flip()
            self.clock.tick(60)

# Esecuzione del gioco
if __name__ == "__main__":
    # Crea il gioco
    game = Game()
    
    # Mostra la schermata di avvio
    start_screen = StartScreen(game.screen, WINDOWS_WIDTH, WINDOWS_HEIGHT)
    if start_screen.run(game.clock):
        # Se l'utente ha cliccato start, avvia il gioco principale
        game.run()

    pygame.mixer.music.stop()
    pygame.quit()
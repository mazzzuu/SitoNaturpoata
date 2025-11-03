import pygame

# Colori
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
SILVER = (200, 200, 200)
BUTTON_COLOR = (70, 130, 180)
BUTTON_HOVER_COLOR = (100, 160, 210)

class StartScreen:
    def __init__(self, screen, width, height):
        self.screen = screen
        self.width = width
        self.height = height
        
        # Font
        self.title_font = pygame.font.SysFont('Arial', 80, bold=True)
        self.button_font = pygame.font.SysFont('Arial', 40)
        self.instructions_font = pygame.font.SysFont('Arial', 24)
        
        # Pulsante
        self.start = pygame.Rect(0, 0, 300, 80)
        self.start.center = (self.width/2, self.height/2)

        self.option = pygame.Rect(0, 0, 300, 80)
        self.option.center = (self.width/2, self.height/2)
        
        # Istruzioni
        self.instructions = [
            "Clicca su una carta per selezionarla",
            "Trascina per muovere",
            "Click destro per girare la carta",
            "Tasti R/L per ruotare",
            "Tasto 0 per resettare la rotazione"
        ]
    
    def draw(self):
        """Disegna la schermata di avvio"""
        self.screen.fill(SILVER)
        
        # Titolo del gioco
        title_text = self.title_font.render("CACTUS", True, BLACK)
        title_rect = title_text.get_rect(center=(self.width/2, self.height/3))
        self.screen.blit(title_text, title_rect)
        
        # Pulsante Start
        mouse_pos = pygame.mouse.get_pos()
        if self.start.collidepoint(mouse_pos):
            pygame.draw.rect(self.screen, BUTTON_HOVER_COLOR, self.start, border_radius=15)
        else:
            pygame.draw.rect(self.screen, BUTTON_COLOR, self.start, border_radius=15)

        # Pulsante Option
        mouse_pos = pygame.mouse.get_pos()
        if self.start.collidepoint(mouse_pos):
            pygame.draw.rect(self.screen, BUTTON_HOVER_COLOR, self.start, border_radius=15)
        else:
            pygame.draw.rect(self.screen, BUTTON_COLOR, self.start, border_radius=15)
        
        pygame.draw.rect(self.screen, BLACK, self.start, 3, border_radius=15)
        
        button_text = self.button_font.render("GIOCA", True, WHITE)
        button_text_rect = button_text.get_rect(center=self.start.center)
        self.screen.blit(button_text, button_text_rect)
        
        # Istruzioni
        for i, instruction in enumerate(self.instructions):
            text = self.instructions_font.render(instruction, True, BLACK)
            self.screen.blit(text, (self.width/2 - text.get_width()/2, self.height/1.5 + i*30))
    
    def handle_events(self, events):
        """Gestisce gli eventi della schermata di avvio"""
        for event in events:
            if event.type == pygame.MOUSEBUTTONDOWN:
                if event.button == 1:  # Click sinistro
                    if self.start.collidepoint(event.pos):
                        return "start_game"
            if event.type == pygame.MOUSEBUTTONDOWN:
                if event.button == 1:  # Click sinistro
                    if self.start.collidepoint(event.pos):
                        return "option"
            elif event.type == pygame.QUIT:
                return "quit"
        return None
    
    def run(self, clock):
        """Esegue il loop della schermata di avvio"""
        running = True
        while running:
            events = pygame.event.get()
            
            # Gestisci eventi
            result = self.handle_events(events)
            if result == "start_game":
                return True
            elif result == "quit":
                return False
            
            # Disegna
            self.draw()
            pygame.display.flip()
            clock.tick(60)
        
        return False
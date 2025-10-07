import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './services/flowbite.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('avyron-ai');

  constructor(private flowbiteService: FlowbiteService, public themeService: ThemeService) {}

  ngOnInit(): void {
    // Inicializa o tema do sistema
    this.themeService.setTheme(this.themeService.currentTheme);

    // Carrega o Flowbite
    this.flowbiteService.loadFlowbite((flowbite) => {
      flowbite.initFlowbite();
    });
  }
}

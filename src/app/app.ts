import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './services/flowbite.service';
import { ThemeService } from './services/theme.service';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, LoadingBarModule, LoadingBarRouterModule],
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

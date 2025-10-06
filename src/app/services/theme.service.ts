import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>('dark');
  public theme$: Observable<Theme> = this.themeSubject.asObservable();

  private readonly THEME_KEY = 'color-theme';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.initializeTheme();
  }

  /**
   * Inicializa o tema fixo em dark
   */
  private initializeTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Tema fixo em dark
      this.setTheme('dark');
    }
  }

  /**
   * Obtém o tema atual
   */
  get currentTheme(): Theme {
    return this.themeSubject.value;
  }

  /**
   * Define o tema do sistema (sempre dark)
   * @param theme - 'light' ou 'dark' (ignorado, sempre será dark)
   */
  setTheme(theme: Theme): void {
    if (isPlatformBrowser(this.platformId)) {
      // Força o tema para dark sempre
      this.themeSubject.next('dark');
      this.applyThemeToDocument('dark');
      localStorage.setItem(this.THEME_KEY, 'dark');
    }
  }

  /**
   * Alterna entre tema claro e escuro (desabilitado - tema fixo em dark)
   */
  toggleTheme(): void {
    // Tema fixo em dark - não faz nada
    return;
  }

  /**
   * Aplica o tema ao documento HTML (sempre dark)
   * @param theme - 'light' ou 'dark' (ignorado, sempre será dark)
   */
  private applyThemeToDocument(theme: Theme): void {
    if (isPlatformBrowser(this.platformId)) {
      const html = document.documentElement;

      // Sempre aplica o tema dark
      html.classList.add('dark');

      // Define o color-scheme para elementos nativos do navegador
      html.style.colorScheme = 'dark';
    }
  }

  /**
   * Verifica se o tema atual é escuro (sempre true)
   */
  isDark(): boolean {
    return true; // Tema fixo em dark
  }

  /**
   * Verifica se o tema atual é claro (sempre false)
   */
  isLight(): boolean {
    return false; // Tema fixo em dark
  }
}

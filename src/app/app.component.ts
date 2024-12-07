import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ListadoActividadesComponent } from './components/listado-actividades/listado-actividades.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuComponent, ListadoActividadesComponent],
  template: `
    <app-menu></app-menu> <!-- Menú superior -->
    <div class="container mt-4">
      <app-listado-actividades></app-listado-actividades> <!-- Listado de actividades -->
    </div>
  `,
})
export class AppComponent {}

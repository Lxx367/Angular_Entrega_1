import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Gimnasio 4V</a>
        <div>
          <a class="nav-link text-white" routerLink="/actividades">Actividades</a>
        </div>
      </div>
    </nav>
  `,
})
export class MenuComponent {}

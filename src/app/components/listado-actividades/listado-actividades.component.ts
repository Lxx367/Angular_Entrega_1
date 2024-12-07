import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadComponent } from '../actividad/actividad.component';
import { ActividadService } from '../../services/actividad.service';

@Component({
  selector: 'app-listado-actividades',
  standalone: true,
  imports: [CommonModule, ActividadComponent],
  providers: [ActividadService],
  template: `
    <div class="container mt-4">
      <h2>Actividades</h2>
      <div class="row">
        <div *ngFor="let actividad of actividades" class="col-md-4">
          <app-actividad [actividad]="actividad"></app-actividad>
        </div>
      </div>
    </div>
  `,
})
export class ListadoActividadesComponent {
  actividades = this.actividadService.obtenerActividades();

  constructor(private actividadService: ActividadService) {}
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Actividad } from '../../models/actividad.model';

@Component({
  selector: 'app-actividad',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ actividad.nombre }}</h5>
        <p class="card-text">{{ actividad.descripcion }}</p>
        <p><strong>Horario:</strong> {{ actividad.horario }}</p>
        <p><strong>Fecha:</strong> {{ actividad.fecha }}</p>
        <p><strong>Lugar:</strong> {{ actividad.lugar }}</p>
        <p><strong>Tipo:</strong> {{ actividad.tipo }}</p>
        <p><strong>Profesor:</strong> {{ actividad.profesor }}</p>
      </div>
    </div>
  `,
})
export class ActividadComponent {
  @Input() actividad!: Actividad;
}

import { Injectable } from '@angular/core';
import { Actividad } from '../models/actividad.model';

@Injectable({
  providedIn: 'root',
})
export class ActividadService {
  obtenerActividades(): Actividad[] {
    return [
      {
        id: 1,
        nombre: 'Yoga Matutino',
        descripcion: 'Clase de yoga para empezar el día con energía.',
        horario: '8:00 AM - 9:00 AM',
        fecha: '2024-06-15',
        lugar: 'Sala 1',
        tipo: 'Flexibilidad',
        profesor: 'Ana López',
      },
      {
        id: 2,
        nombre: 'CrossFit Intensivo',
        descripcion: 'Entrenamiento de alta intensidad.',
        horario: '10:00 AM - 11:00 AM',
        fecha: '2024-06-16',
        lugar: 'Sala 2',
        tipo: 'Fuerza',
        profesor: 'Carlos Pérez',
      },
      {
        id: 3,
        nombre: 'Zumba Divertida',
        descripcion: 'Baila y diviértete mientras haces ejercicio.',
        horario: '6:00 PM - 7:00 PM',
        fecha: '2024-06-17',
        lugar: 'Sala 3',
        tipo: 'Cardio',
        profesor: 'Laura Martínez',
      },
    ];
  }
}

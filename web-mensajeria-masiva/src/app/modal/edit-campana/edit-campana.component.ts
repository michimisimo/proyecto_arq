import { Component, Input, Output, EventEmitter } from '@angular/core';
import { campana } from '../../interfaces/campana.interface';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-campana',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-campana.component.html',
  styleUrls: ['./edit-campana.component.css']
})
export class EditCampanaComponent {
  @Input() campana!: campana;
  @Output() onSave = new EventEmitter<campana>();
  @Output() onClose = new EventEmitter<void>();

  
  currentDate: string;

  tempNombre: string = '';

  availableHours: string[] = [];

  minDate: string = '';

  constructor() {
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0]; // Obtener la fecha en formato YYYY-MM-DD
    this.generateAvailableHours();//Obtener horas en el rango disponible
  }  

  ngOnInit() {
    // Al inicializar, convierte el nombre a capitalizado
    this.tempNombre = this.campana.nombre
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    this.minDate = tomorrow.toISOString().split('T')[0];
  }

  save() {
    this.campana.nombre = this.tempNombre;
    this.onSave.emit(this.campana); // Emite los nuevos datos
  }

  generateAvailableHours() {
    const startHour = 8; // 08:00
    const endHour = 22; // 22:00

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minutes of [0, 15, 30, 45]) {
        if (hour === endHour && minutes > 0) break; // Evitar horas después de 22:00
        this.availableHours.push(`${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
      }
    }
  }
  
}

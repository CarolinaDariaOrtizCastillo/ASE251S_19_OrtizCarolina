import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngFor y *ngIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Asegúrate de tener esto para que funcionen las directivas
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  // TÍTULO DINÁMICO
  title = signal('Mi Tarjeta Profesional');

  // MODO OSCURO
  darkMode = signal(false);

  toggleDarkMode() {
    this.darkMode.update(v => !v);
  }

  // HABILIDADES
  skills = signal([
    'HTML5', 'CSS3', 'TypeScript', 'Angular 17+', 'SQL Server', 'Git & GitHub'
  ]);

  // LISTADO DE PROYECTOS
  proyectos = signal([
    {
      nombre: 'Sistema de Constancias - Automatizaciòn',
      descripcion: 'Automatización de certificados usando Google Apps Script y Sheets.',
      tecnologias: 'Google Apps Script, JS',
      mostrar: false
    },
    {
      nombre: 'Programa de Transitabilidad - Pàgina Web',
      descripcion: 'Presentaciòn de programa de transitabilidad + Registro de interesados en ingresar al programa',
      tecnologias: 'Tailwind CSS, MySQL, Node.js',
      mostrar: false
    }
  ]);

  // LISTADO DE CERTIFICADOS
  certificados = signal([
    {
      nombre: 'Angular Developer Pro',
      descripcion: 'Certificación avanzada en componentes y signals.',
      mostrar: false
    },
    {
      nombre: 'SQL Specialist',
      descripcion: 'Dominio de queries complejas y optimización.',
      mostrar: false
    }
  ]);

  // FUNCIONES PARA MOSTRAR/OCULTAR (Toggle)
  // Usamos .update() para que Angular detecte el cambio en el array
  toggleProyecto(index: number) {
    this.proyectos.update(lista => {
      lista[index].mostrar = !lista[index].mostrar;
      return [...lista]; // Retornamos una copia para refrescar la vista
    });
  }

  toggleCert(index: number) {
    this.certificados.update(lista => {
      lista[index].mostrar = !lista[index].mostrar;
      return [...lista];
    });
  }
}
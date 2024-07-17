import { Component } from '@angular/core';

@Component({
  selector: 'forms-apps-page',
  standalone: true,
  imports: [],
  templateUrl: './forms-apps-page.component.html',
  styleUrl: './forms-apps-page.component.css'
})
export class FormsAppsPageComponent {
  pdfFile: File | null = null;
  zipFile: File | null = null;

  onFileSelected(event: Event, type: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      if (type === 'pdf') {
        this.pdfFile = input.files[0];
      } else if (type === 'zip') {
        this.zipFile = input.files[0];
      }
    }
  }

  onCancel(): void {
    this.pdfFile = null;
    this.zipFile = null;
    alert('Acción cancelada');
  }

  onSave(): void {
    if (this.pdfFile && this.zipFile) {
      // Implementar la lógica para guardar los archivos
      console.log('PDF:', this.pdfFile);
      console.log('ZIP:', this.zipFile);
      alert('Archivos guardados');
    } else {
      alert('Por favor, cargue ambos archivos antes de guardar');
    }
  }
}

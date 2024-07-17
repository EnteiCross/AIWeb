import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel

@Component({
  selector: 'app-forms-apps-page',
  templateUrl: './forms-apps-page.component.html',
  styleUrls: ['./forms-apps-page.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Agrega FormsModule a los imports
})
export class FormsAppsPageComponent {
  @ViewChild('zipInput', { static: false }) zipInput!: ElementRef;

  zipFile: File | null = null;
  zipFileName: string | null = null;
  gitlabUrl: string = '';
  showGitlabUrlInput: boolean = false;

  triggerFileInput(type: string): void {
    if (type === 'zip') {
      this.zipInput.nativeElement.click();
    }
  }

  onFileSelected(event: Event, type: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      if (type === 'zip') {
        this.zipFile = input.files[0];
        this.zipFileName = this.zipFile.name; // Guarda el nombre del archivo ZIP
      }
    }
  }

  showGitlabInput(): void {
    this.showGitlabUrlInput = true;
  }

  isValidGitlabUrl(url: string): boolean {
    const regex = /^(https:\/\/|http:\/\/)?(www\.)?gitlab\.com\/[\w\-]+\/[\w\-]+(\.git)?$/;
    return regex.test(url);
  }

  onCancel(): void {
    this.zipFile = null;
    this.zipFileName = null;
    this.gitlabUrl = '';
    this.showGitlabUrlInput = false;
    alert('Acción cancelada');
  }

  onSave(): void {
    if (this.gitlabUrl && this.isValidGitlabUrl(this.gitlabUrl)) {
      console.log('GitLab URL válida:', this.gitlabUrl);
      // Aquí debes hacer una llamada al backend para descargar el repositorio.
      alert(`URL de GitLab válida: ${this.gitlabUrl}`);
    } else {
      alert('Por favor, ingrese una URL válida de GitLab');
    }
  }
}

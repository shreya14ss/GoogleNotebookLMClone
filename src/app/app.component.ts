import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDocumentReady = false;
  uploadedFile: File | null = null;

  onDocumentReady() {
    this.isDocumentReady = true;
  }

  onFileUploaded(file: File) {
    this.uploadedFile = file;
  }
}

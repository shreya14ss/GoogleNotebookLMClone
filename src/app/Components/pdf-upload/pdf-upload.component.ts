import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pdf-upload',
  templateUrl: './pdf-upload.component.html',
  styleUrls: ['./pdf-upload.component.scss']
})
export class PdfUploadComponent {
  @Output() documentReady = new EventEmitter<boolean>();
  @Output() fileUploaded = new EventEmitter<File>();
  isUploading = false;
  uploadProgress = 0;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.simulateUpload(file);
    } else {
      alert('Please select a valid PDF file');
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf') {
        this.simulateUpload(file);
      } else {
        alert('Please drop a valid PDF file');
      }
    }
  }

  private simulateUpload(file: File) {
    this.isUploading = true;
    this.uploadProgress = 0;
    
    const interval = setInterval(() => {
      this.uploadProgress += 5;
      if (this.uploadProgress >= 100) {
        clearInterval(interval);
        this.isUploading = false;
        this.documentReady.emit(true);
        this.fileUploaded.emit(file);
        console.log('Upload completed:', file.name);
      }
    }, 100);
  }
}

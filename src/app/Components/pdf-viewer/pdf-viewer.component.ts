import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnChanges {
  @Input() pdfFile: File | null = null;
  pdfSrc: string | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pdfFile'] && this.pdfFile) {
      this.loadPdf();
    }
  }

  private loadPdf() {
    if (this.pdfFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };
      reader.readAsArrayBuffer(this.pdfFile);
    }
  }
}

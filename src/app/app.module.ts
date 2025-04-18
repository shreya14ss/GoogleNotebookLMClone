import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChatInterfaceComponent } from './Components/chat-interface/chat-interface.component';
import { PdfUploadComponent } from './Components/pdf-upload/pdf-upload.component';
import { PdfViewerComponent } from './Components/pdf-viewer/pdf-viewer.component';
import { FormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


@NgModule({
  declarations: [
    AppComponent,
    PdfUploadComponent,
    PdfViewerComponent,
    ChatInterfaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Add this line
    FormsModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfUploadComponent } from './Components/pdf-upload/pdf-upload.component';
import { ChatInterfaceComponent } from './Components/chat-interface/chat-interface.component';


const routes: Routes = [
  { path: '', component: PdfUploadComponent },
  { path: 'chat', component: ChatInterfaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

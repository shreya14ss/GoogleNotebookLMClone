import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:3000/api/chat';

  constructor(private http: HttpClient) {}

  sendMessageToAI(message: string, documentContext: string): Observable<any> {
    return this.http.post(this.apiUrl, {
      message,
      context: documentContext
    }).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else if (error.status === 0) {
      // Connection error
      errorMessage = 'Unable to connect to the server. Please make sure the backend is running.';
    } else {
      // Backend error
      errorMessage = `Server returned code ${error.status}, message: ${error.error?.message || error.message}`;
    }
    console.error('Chat service error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
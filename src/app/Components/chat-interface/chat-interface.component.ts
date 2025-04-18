import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.scss']
})
export class ChatInterfaceComponent implements OnChanges {
  @Input() isDocumentReady: boolean = false;
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['isDocumentReady'] && changes['isDocumentReady'].currentValue) {
      console.log('Chat interface received document ready state');
    }
  }
  messages: any[] = [];
  newMessage: string = '';

  exampleQuestions = [
    "What is the main topic of this document?",
    "Can you summarize the key points?",
    "What are the conclusions or recommendations?"
  ];
  isLoading: boolean = false;

  constructor(private chatService: ChatService) {}

  // Update sendMessage method
  sendMessage(message: string = this.newMessage) {
    if (message.trim()) {
      // Add user message
      this.messages.push({
        text: message,
        isUser: true,
        timestamp: new Date()
      });
      this.newMessage = '';
      
      // Show loading state
      this.isLoading = true;

      // Call AI service
      this.chatService.sendMessageToAI(message, 'documentContext').subscribe({
        next: (response) => {
          this.messages.push({
            text: response.answer,
            isUser: false,
            timestamp: new Date()
          });
        },
        error: (error) => {
          console.error('Error getting AI response:', error);
          this.messages.push({
            text: 'Sorry, I encountered an error processing your request.',
            isUser: false,
            timestamp: new Date()
          });
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }
  showConfirmDialog: boolean = false;

  // Add this new method
  handleCloseClick() {
    this.showConfirmDialog = true;
  }

  handleConfirmUpload() {
    // Reset the chat and show file upload
    this.messages = [];
    this.newMessage = '';
    this.showConfirmDialog = false;
    // Add any additional logic for new PDF upload
  }

  handleCancelClose() {
    this.showConfirmDialog = false;
  }
}

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

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

  sendMessage(message: string = this.newMessage) {
    if (message.trim()) {
      this.messages.push({
        text: message,
        isUser: true,
        timestamp: new Date()
      });
      this.newMessage = '';
      // TODO: Implement actual chat logic
    }
  }
}

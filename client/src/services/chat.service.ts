import { Injectable, EventEmitter } from '@angular/core';
import * as io from 'socket.io-client';
import { AuthService } from './auth.service';
const DOMAIN = 'http://localhost:3000';

interface Message{
  message:string;
  userChat:any;
  otherUser:any;
  created: Date;
}

@Injectable()
export class ChatService {
  socket:any;
  messages:Array<Message> = [];
  constructor(
    private authService : AuthService){
    console.log("Created chat service");
    this.socket = io.connect(`${DOMAIN}`);
    this.socket.on('recibe-message', function(data:any){
      console.log(`Mensaje Recibido: "${data.message}"`);
      this.messages.push({
        userChat: false,
        message: data.message.m,
        created:  new Date(),
        otherUser:data.message.usr
      })
    }.bind(this));
  }

  sendMessage(m){
    console.log(`Mandando mensaje: "${m}"`);
    let usr = this.authService.user; //me falta
    this.socket.emit('send-message',{
      message:{m,usr}
    });
    this.messages.push({
      userChat: this.authService.user, //me falta
      message:m,
      created: new Date(),
      otherUser:false
    })
  }
}

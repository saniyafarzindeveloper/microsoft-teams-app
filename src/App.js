//dependencies: ant design icons, axios, react-chat-engine
import React from 'react'
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

export default function App() {

  //if not logged in --> show Login Form
  //if logged in --> show chats

  if (!localStorage.getItem('username')) {
  return <LoginForm />
  } else {
    
  }

  return (
   <ChatEngine //component
   //passing props
   height = "100vh"
   projectID = "50f26772-beca-483c-9b39-a4cfb489170b" //got it from chatengine.io after creating a project
   userName = {localStorage.getItem('username')}
   userSecret = {localStorage.getItem('password')}
   renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}//rendering all the chat feeds
    />
  );
}

//secret = saniya/password
//chat access secret key - teamsApp
//1234 - pw

//Access Key (Secret) - 1234

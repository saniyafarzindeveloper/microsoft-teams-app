//dependencies: ant design icons, axios, react-chat-engine
import React from 'react'
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';


export default function App() {
  return (
   <ChatEngine //component
   //passing props
   height = "100vh"
   projectID = "7ae07fb7-3b77-4522-9b4e-5480d7a04423" //got it from chatengine.io after creating a project
   userName = "saniya"
   userSecret = "1234"
   renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}//rendering all the chat feeds
    />
  );
}

//secret = saniya/password
//chat access secret key - teamsApp
//1234 - pw

//Access Key (Secret) - 1234

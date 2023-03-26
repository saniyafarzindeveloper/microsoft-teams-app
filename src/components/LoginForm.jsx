import React from "react";
import axios from "axios";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); //to prevent the default behvaiour

    //implement authenticatio
    const authObject  = {'Project-ID':" 50f26772-beca-483c-9b39-a4cfb489170b" , "User-Name" : username, "User-Secret" : password };
    try {
      await axios.get('https://api.chatengine.io/chats', {headers: authObject}); //sending req to inner workings of the API

      //setting the field of username and passowrd to the local storage
        localStorage.setItem('username' , username); //storing creds to prevent logging again and again
        localStorage.setItem('password', password);

          //if the user authentication is successfull:
            window.location.reload();
    } catch (error) {
        setError("Oooppss!! Incorrect credentials!")
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Welcome to Teams App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="User Name"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />

          <div align="center">
            <button type="submit" className="button">Start Chatting</button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
}

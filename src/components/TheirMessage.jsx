import React from "react";

export default function TheirMessage({ lastMessage, message }) {
  //checking if their message is the 1st msg
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          // if the user has uploaded an image, show that as an avatar
          style={{ backgroundImage: `url(${message.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "5px" : "50px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
            marginLeft: isFirstMessageByUser ? "5px" : "50px"
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}

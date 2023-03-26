import React from 'react'

export default function MyMessage({message}) {

  //render img if the msg in an image
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img //img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }

  return (
    // send text
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
      {message.text} 
    </div>
  );
};

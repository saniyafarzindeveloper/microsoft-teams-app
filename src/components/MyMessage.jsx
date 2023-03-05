import React from 'react'

export default function MyMessage(message) {

  //render img if the msg in an image
    if(message?.attachments?.length> 0){
      <img 
        src = {message.attachments[0].file}
        alt = "message-attachment"
        className='message-image'
        style={{float:'right'}}
        />
    }

    //render text msg
  return (
    <div className='message' style={{float:'right', marginRight:'18px', color:'white', backgroundColor:'#3B2A50'}} >
    {message.text}
    </div>
  )
}

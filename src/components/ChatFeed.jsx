import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

export default function ChatFeed(props) {
  //console.log(props);

  //destructuring props
  const { chats, activeChat, userName, messages } = props;

  //if chats exist
  const chat = chats && chats[activeChat];
  console.log(userName, messages, chat);

  //message rendering functional component
  const renderMessages = () => {
    //keys are just ID's of specific messages
    const keys = Object.keys(messages);
    console.log(keys);

    //rendering keys
    return keys.map((key, index) => {
      const message = messages[key];

      //if there are messages find the last msg
      //The strict equality ( === ) operator checks whether its two operands are equal,
      //returning a Boolean result
      const lastMessageKey = index === 0 ? null : keys[index - 1];

      //check using user name
      const isMyMessage = userName === message.sender.userName;

      return (
        // `` using template literals/ backticks for string operation
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {
              isMyMessage ? (
                //passing the message as props so that it can be accessed in the actual component
                <MyMessage message = {message} /> //if its my message, render my message component
              ) : (
                <TheirMessage message = {message} lastMessage = {messages[lastMessageKey]} />
              ) //if its not my message, render their message component
            }
          </div>

          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "67px",
            }}
          >
            read-receipts
          </div>
        </div>
      );
    });
  };
  //renderMessages();

  //if there are no chats
  if (!chat) return "Loading...";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.userName}`)}
        </div>
      </div>
      {renderMessages()};{/* adding space */}
      <div style={{ height: "100px" }} />
      {/* creating a form where users can send messgs */}
      <div className="message-form-container">
        <MessageForm {...props} chatID = {activeChat} />
      </div>
    </div>
  );
}

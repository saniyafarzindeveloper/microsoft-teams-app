
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
  //ddestructuring props
  const { chats, activeChat, userName, messages } = props;

  //if chats exist
  const chat = chats && chats[activeChat];

  //message rendering functional component
  const renderReadReceipts = (message, isMyMessage) =>
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );

  const renderMessages = () => {

    //keys are just ID's of specific messages
    const keys = Object.keys(messages);
    //rendering keys
    return keys.map((key, index) => {
      const message = messages[key];

      //if there are messages find the last msg
      //The strict equality ( === ) operator checks whether its two operands are equal,
      //returning a Boolean result
      const lastMessageKey = index === 0 ? null : keys[index - 1];

      //check using user name
      const isMyMessage = userName === message.sender.username;

      return (
         // `` using template literals/ backticks for string operation
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
               //passing the message as props so that it can be accessed in the actual component
              <MyMessage message={message} />
            ) : (
              <TheirMessage //if its not my message, render their message component
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  //if there are no chats
  if (!chat) return "Loading...";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;

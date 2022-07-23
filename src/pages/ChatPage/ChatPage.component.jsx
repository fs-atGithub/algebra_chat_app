import "./ChatPage.styles.scss";

import { Message } from "../../components/Message";
import { MessageForm } from "../../components/MessageForm";
import { Button } from "../../components/Button";

export function ChatPage(props) {
  if (props.error !== null) {
    return (
      <div className="chat-page loading-error">
        <div>
          Unable to connect... <br />
          Refresh page to tray again.
        </div>
        <div className="spinner-sector spinner-sector-red"></div>

        <div className="spinner-sector spinner-sector-blue"></div>
        <div className="spinner-sector spinner-sector-green"></div>
      </div>
    );
  }

  if (!props.joinedRoom) {
    return (
      <div className="chat-page loading">
        Loading...
        <div className="spinner-sector spinner-sector-red"></div>
        <div className="spinner-sector spinner-sector-blue"></div>
        <div className="spinner-sector spinner-sector-green"></div>
      </div>
    );
  }
  const messageItems = props.messages.map((message) => (
    <div key={message.id} className="chat-page__message-list-item">
      <Message
        avatarBackgroundColor={message.user.avatarBackgroundColor}
        avatarText={message.user.avatarText}
        displayName={message.user.displayName}
        time={message.displayCreatedAt()}
      >
        {message.messageText}
      </Message>
    </div>
  ));

  return (
    <div className="chat-page">
      <div className="chat-page__title">
        Chat about Fronend development
        <Button variant="text" onClick={props.logOutUser}>
          Log out
        </Button>
      </div>
      <div className="chat-page__message-list">{messageItems}</div>
      <div className="chat-page__form">
        <MessageForm onSend={props.onSendMessage} />
      </div>
    </div>
  );
}

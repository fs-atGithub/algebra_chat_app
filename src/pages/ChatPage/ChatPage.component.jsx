import "./ChatPage.styles.scss";

import { Message } from "../../components/Message";
import { MessageForm } from "../../components/MessageForm";
import Spinner from "../../components/Spinner/Spinner.component";

export function ChatPage(props) {
  if (props.error !== null) {
    return <Spinner status="Unable to connect..." />;
  }

  if (!props.joinedRoom) {
    return <Spinner status="Loading..." />;
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
        <p className="chat-page__count">user count: {props.userCount}</p>
      </div>
      <div className="chat-page__message-list">{messageItems}</div>
      <div className="chat-page__form">
        <MessageForm onSend={props.onSendMessage} />
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { ChatEngineWrapper, Socket, ChatFeed } from "react-chat-engine";
function ChatEngine(props) {
  return (
    <div
      className="ChatEngine"
      style={{
        height: props.visible ? "100%" : "0%",
        zIndex: props.visible ? "100%" : "0%",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      {props.visible && (
        <ChatEngineWrapper>
          <Socket
            projectID={"a972549d-e8c0-4b8d-a33f-888be4fb27e4"}
            userName={props.user.email}
            userSecret={props.user.email}
          />
          <ChatFeed activeChat={props.chat.id} />
        </ChatEngineWrapper>
      )}
    </div>
  );
}
export default ChatEngine;

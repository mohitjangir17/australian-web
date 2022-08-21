// import "./styles.css";
import { styles } from "./styles";
import EmailForm from "./EmailForm";
import { useState } from "react";
import ChatEngine from "./ChatEngine";
const SupportWindow = (props) => {
  const [user, setUser] = useState(null);
  const [chat, setChat] = useState(null);
  return (
    <div
      id="supportWindow"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? "1" : "0" },
      }}
    >
      <EmailForm
        setUser={(user) => setUser(user)}
        setChat={(chat) => setChat(chat)}
        visible={user === null || chat === null}
      />

      <ChatEngine
        visible={user !== null || chat !== null}
        chat={chat}
        user={user}
      />
    </div>
  );
};

export default SupportWindow;

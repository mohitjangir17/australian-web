import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useState } from "react";
// import Avatar from "./Avatar";
import { styles } from "./styles";

function EmailForm(props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function getOrCreateUser(callback) {
    axios
      .put(
        "https://api.chatengine.io/users/",
        {
          username: email,
          secret: email,
          email: email,
        },
        { headers: { "Private-Key":'57d09e2d-0f73-4ed1-a24c-6d2a2c3c1251'} }
      )
      .then((r) => callback(r.data))
      .catch((error) => {
        console.log(error.response);
      });
  }

  function getOrCreateChat(callback) {
    axios
      .put(
        "https://api.chatengine.io/chats/",
        {
          usernames: ["Adam La Morre", email],
          is_direct_chat: true,
        },
        { headers: { "Private-Key":'57d09e2d-0f73-4ed1-a24c-6d2a2c3c1251'} }
      )
      .then((r) => callback(r.data))
      .catch((error) => {
        console.log(error.response);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    console.log("sending mail", email);

    getOrCreateUser((user) => {
      props.setUser(user);
      getOrCreateChat((chat) => props.setChat(chat));
    });
  }
  return (
    <div
      style={{
        ...styles.emailFormWindow,
        ...{
          height: props.visible ? "100%" : "0",
          opacity: props.visible ? "1" : "0",
        },
      }}
    >
      <div style={{ height: "0%" }}>
        <div style={styles.stripe}></div>
        <div
          style={{
            ...styles.loadingDiv,
            ...{
              zIndex: loading ? "10" : "-1",
              opacity: loading ? "0.33" : "0",
            },
          }}
        />
        <LoadingOutlined
          style={{
            ...styles.loadingIcon,
            ...{
              zIndex: loading ? "10" : "-1",
              opacity: loading ? "0.33" : "0",
              fontSize: "90px",
              //   top: "calc(50%-00px)",
              //   left: "calc(50%-41px)",
            },
          }}
        />

        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            textAlign: "center",
          }}
        />
      </div>
      <div style={styles.topText}>
        Welcome to our <br /> Support Chat
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ position: "relative", width: "100%", top: "20%" }}
      >
        <input
          style={styles.emailInput}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abc@email.com"
        />
        <button type="submit">Start Chat</button>
      </form>
      <div style={styles.bottomText}>
        Enter Your Email <br /> to get Started
      </div>
    </div>
  );
}
export default EmailForm;

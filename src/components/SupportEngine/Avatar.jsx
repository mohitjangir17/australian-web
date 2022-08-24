import { styles } from "./styles";
import { useState } from "react";
const Avatar = props => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ position: "fixed", bottom: "24px", right: "24px" }}
      className="Avatar"
    >
      <div
        className="transition-3"
        onMouseLeave={() => setHovered(true)}
        onMouseEnter={() => setHovered(false)}
        onClick= {() => props.onClick && props.onClick()}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? "4px solid #f9f0ff" : "1px solid black" },
        }}
      ></div>
    </div>
  );
}
export default Avatar;

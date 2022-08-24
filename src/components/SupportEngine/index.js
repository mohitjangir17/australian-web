import React, { useRef, useEffect, useState } from "react";
import Avatar from "./Avatar";
import SupportWindow from "./SupportWindow";

const SupportEngine = () => {
  //   const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    document.addEventListener("mouseup", function (e) {
      var container = document.getElementById("supportWindow");
      if (!container.contains(e.target)) {
        setVisible(false);
      }
    });
  });
  return (
    <div>
      <SupportWindow visible={visible} />
      <Avatar
        onClick={() => setVisible(true)}
        style={{ position: "fixed", bottom: "24px", right: "24px" }}
      />
    </div>
  );
};

export default SupportEngine;

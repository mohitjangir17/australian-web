import { useEffect } from "react";
import { useState } from "react";
import "../styles/uploadform.css";

// function routeToUpload(e) {
//   e.preventDefault();
//   console.log("clicked routeTo Upload");
// }

function UploadForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const storage = window.sessionStorage;

  useEffect(() => {
    if (storage.getItem("firstname")) {
      setFirstname(storage.getItem("firstname"));
    }
    if (storage.getItem("lastname")) {
      setLastname(storage.getItem("lastname"));
    }
    if (storage.getItem("email")) {
      setEmail(storage.getItem("email"));
    }
    if (storage.getItem("subject")) {
      setSubject(storage.getItem("subject"));
    }
  }, [storage]);
  useEffect(() => {
    storage.setItem("firstname", firstname);
    storage.setItem("lastname", lastname);
    storage.setItem("email", email);
    storage.setItem("subject", subject);
  }, [firstname, lastname, email, subject, storage]);
  return (
    <div className="UploadForm">
      <form
        action="/upload"
        // method="post"
      >
        <label htmlFor="fistname">Firstname</label> <br />
        <input
          type="text"
          name="firstname"
          value={firstname}
          placeholder="Your Firstname"
          onChange={(e) => setFirstname(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="lastname">Lastname</label> <br />
        <input
          type="text"
          name="lastname"
          value={lastname}
          placeholder="Your Lastname"
          onChange={(e) => setLastname(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="email">Email address</label> <br />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="subject">Subject</label> <br />
        <input
          type="text"
          name="subject"
          value={subject}
          placeholder="Query Subject"
          onChange={(e) => setSubject(e.target.value)}
        />{" "}
        <br /> <br />
        {/* <Link to="/upload">Get Help</Link> */}
        <button type="submit">Get Help</button>
      </form>
    </div>
  );
}
export default UploadForm;

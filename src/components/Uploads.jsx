import { useEffect, useState } from "react";
import "../styles/uploads.css";
import HeaderOtherPages from "./HeaderOtherPages";
import uploadHeaderImage from "./resources/mainBanner.jpg";

function Upload() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [contact, setContact] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [words, setWords] = useState("");
  const [deadline, setDeadline] = useState("");

  const formInitialValue = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    title: "",
    description: "",
    words: "",
    deadline: "",
    file: null,
  };

  const storage = window.sessionStorage;
  useEffect(() => {
    if (storage.getItem("firstname")) {
      setFirstName(storage.getItem("firstname"));
    }
    if (storage.getItem("lastname")) {
      setLastName(storage.getItem("lastname"));
    }
    if (storage.getItem("email")) {
      setEmail(storage.getItem("email"));
    }
    if (storage.getItem("subject")) {
      setSubject(storage.getItem("subject"));
    }
  }, [storage]);
  return (
    <>
      <HeaderOtherPages
        headerImage={uploadHeaderImage}
        title="Upload Assignment"
      />
      <div className="Upload">
        <form action="" method="post">
          <div className="splitFields">
            {" "}
            <div>
              <label htmlFor="fistname">Firstname</label> <br />
              <input
                type="text"
                name="firstname"
                value={firstName}
                placeholder="Your Firstname"
                onChange={(e) => setFirstName(e.target.value)}
              />{" "}
              <br />
            </div>
            <div>
              <label htmlFor="lastname">Lastname</label> <br />
              <input
                type="text"
                name="lastname"
                value={lastName}
                placeholder="Your Lastname"
                onChange={(e) => setLastName(e.target.value)}
              />{" "}
              <br />
            </div>
            <div>
              <label htmlFor="email">Email address</label> <br />
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
              <br />
            </div>
            <div>
              <label htmlFor="contact">Contact</label> <br />
              <input
                type="tel"
                name="contact"
                value={contact}
                placeholder="Your Contact Number"
                onChange={(e) => setContact(e.target.value)}
              />{" "}
              <br />
            </div>
          </div>

          <div className="splitFields">
            <div>
              <label htmlFor="subject">Subject</label> <br />
              <input
                type="text"
                name="subject"
                value={subject}
                placeholder="Query Subject"
                onChange={(e) => setSubject(e.target.value)}
              />{" "}
              <br />
            </div>
            <div>
              <label htmlFor="title">Title</label> <br />
              <input
                type="text"
                name="title"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />{" "}
              <br />
            </div>
            <div>
              <label htmlFor="description">Description</label> <br />
              <input
                type="text"
                name="description"
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />{" "}
              <br />
            </div>{" "}
            <div>
              <label htmlFor="words">Words</label> <br />
              <input
                type="number"
                name="words"
                value={words}
                placeholder="Words"
                onChange={(e) => setWords(e.target.value)}
              />{" "}
              <br />
            </div>
            <div>
              <label htmlFor="deadline">Deadline</label> <br />
              <input
                type="date"
                name="deadline"
                value={deadline}
                placeholder="Deadline"
                onChange={(e) => setDeadline(e.target.value)}
              />{" "}
              <br />
            </div>
          </div>
          <button>Get Help</button>
        </form>
      </div>
    </>
  );
}
export default Upload;

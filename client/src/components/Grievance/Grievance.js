import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import React, { useState } from "react";
import "./Grievance.css";

const Grievance = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_rwoi8nb";
      const templateId = "template_f7ccrcc";
      const userId = "7t-lC4XeL8x7rG1PV";
      const templateParams = {
        name,
        email,
        message,
      };

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <span className="con">
          <div id="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Grievance"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button onClick={submit}>Send Grievance</button>

          </div>
        </span>
      </div>
    </div>
  );
};

export default Grievance;

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import React, { useState } from "react";
import "./Grievance.css";

export default function Grievance(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [credentials, setCredentials] = useState({studentId: "", subject: "",message: ""}) 

  const submit = async (e) => {
    
    if (name && email && message) {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/student/complaint",{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'auth-token':localStorage.getItem('auth-token')
          },
          body:JSON.stringify({studentId: credentials.studentId, subject: credentials.subject,complaint: credentials.message})
        })

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


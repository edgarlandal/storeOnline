import React, { useState } from "react";

import "./contact.css";
function Contact() {
  const [contact, setContact] = useState({});

  const sentComment = () => {
    var count = 0;
    if (Object.keys(contact) !== 0) {
      for (const cont in contact) {
        if (contact[cont] !== "") {
          count++;
        }
      }
      if (count !== 3) {
        console.log("Faltan campos");
      } else {
        console.log("Completo");
      }
    }
  };

  return (
    <div className="contact page">
      <h1>Contact page</h1>
      <div className="parent-container">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Comment</label>
          <textarea
            className="form-control"
            type="text"
            placeholder="Enter your comment"
            onChange={(e) =>
              setContact({ ...contact, comment: e.target.value })
            }
            rows="3"
          ></textarea>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn btn-dark" onClick={sentComment}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

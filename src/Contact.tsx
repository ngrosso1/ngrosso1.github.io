import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = "mailto:nicholasj.grosso@gmail.com";
        }}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address" required />
          </div>
        </div>

        <div className="form-group full">
          <label htmlFor="message">Content</label>
          <textarea id="message" placeholder="Please send me a message" required />
        </div>

        <button type="submit" className="send-button">
          Send Email →
        </button>
      </form>

      <div className="contact-info-display">
        <div className="contact-item">
          <span>📧 Email: </span>
          <a href="mailto:nicholasj.grosso@gmail.com">nicholasj.grosso@gmail.com</a>
        </div>
        <div className="contact-item">
          <span>📞 Phone: </span>
          <a href="tel:+19145646793">(914)-564-6793</a>
        </div>
      </div>

    </section>
  );
};

export default Contact;

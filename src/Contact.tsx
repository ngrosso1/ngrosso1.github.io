import React from 'react';
import './Contact.scss'; // Ensure this file exists

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>
        <span className="contact-label">Email 📧</span>
        <a href="mailto:nicholasj.grosso@gmail.com" className="contact-info">
          nicholasj.grosso@gmail.com
        </a>
      </p>
      <p>
        <span className="contact-label">Phone 📞</span>
        <a href="tel:+19145646793" className="contact-info">(914)-564-6793</a>
      </p>
      <p>
        <span className="contact-label">Address 🏠</span>
        <span className="contact-info">Raleigh, NC</span>
      </p>
    </div>
  );
};

export default Contact;

import React from 'react';
import './Contact.scss'; // Ensure this file exists

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Email: example@example.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 Main St, Anytown, USA</p>
      {/* Add more contact information as needed */}
    </div>
  );
};

export default Contact;

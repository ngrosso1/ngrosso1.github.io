import React from 'react';
import './Contact.scss'; // Ensure this file exists

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h2>Contact Info</h2>
      <p>Email: nicholasj.grosso@gmail.com</p>
      <p>Phone: (914)-564-6793</p>
      <p>Address: Raleigh, NC</p>
      {/* Add more contact information as needed */}
    </div>
  );
};

export default Contact;

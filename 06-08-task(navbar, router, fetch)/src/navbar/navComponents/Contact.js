import React from 'react';

const ContactPage = ({postData}) => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>This is the Contact Page. You can reach us through the following means:</p>
      <ul>
        <li>Phone: 123-456-7890</li>
        <li>Email: contact@example.com</li>
        <li>Address: 123 Main St, City, Country</li>
      </ul>
      {postData && (
        <div className="data-box">
          <h2>Title: {postData.title}</h2>
          <p>Body: {postData.body}</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;

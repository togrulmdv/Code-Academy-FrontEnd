import React from 'react';

const AboutPage = ({postData}) => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About Page. We are a company dedicated to...</p>
      {postData && (
        <div className="data-box">
          <h2>Title: {postData.title}</h2>
          <p>Body: {postData.body}</p>
        </div>
      )}
    </div>
  );
};

export default AboutPage;

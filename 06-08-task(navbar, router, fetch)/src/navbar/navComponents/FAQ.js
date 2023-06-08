import React from 'react';

const FAQPage = ({postData}) => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <h2>Question 1</h2>
      <p>Answer to Question 1.</p>
      <h2>Question 2</h2>
      <p>Answer to Question 2.</p>
      <h2>Question 3</h2>
      <p>Answer to Question 3.</p>
      {postData && (
        <div className="data-box">
          <h2>Title: {postData.title}</h2>
          <p>Body: {postData.body}</p>
        </div>
      )}
    </div>
  );
};

export default FAQPage;

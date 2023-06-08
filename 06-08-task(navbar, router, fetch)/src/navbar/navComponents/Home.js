import React from 'react';

const HomePage = ({postData}) => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {postData && (
        <div className="data-box">
          <h2>Title: {postData.title}</h2>
          <p>Body: {postData.body}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;

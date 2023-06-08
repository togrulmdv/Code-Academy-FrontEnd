import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import HomePage from './navbar/navComponents/Home';
import ContactPage from './navbar/navComponents/Contact';
import AboutPage from './navbar/navComponents/About';
import FAQPage from './navbar/navComponents/FAQ';
import './Styles.css';

const App = () => {
  const [postData, setPostData] = useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage postData={postData} />} />
          <Route path="/contact" element={<ContactPage postData={postData} />} />
          <Route path="/about" element={<AboutPage postData={postData} />} />
          <Route path="/faq" element={<FAQPage postData={postData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

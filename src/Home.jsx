import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const Home = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const welcomeText = 'elcome to, SpiceCraft ';

  useEffect(() => {
    let currentIndex = 0;
    let isTyping = true;

    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (currentIndex <= welcomeText.length) {
          setText("W" + welcomeText.substring(0, currentIndex));
          currentIndex++;
        } else {
          isTyping = false;
          currentIndex = 0;
        }
      } else {
        setText('W');
        isTyping = true;
      }
    }, 100); 

    return () => clearInterval(typingInterval);
  }, []);



  return (
    <div className='Home'>
      <div className='Content'>
        <b>{text}</b>
        <p> where flavor reigns supreme! Our chefs blend fresh ingredients with a dash of magic to create dishes bursting with deliciousness. From savory curries to zesty grills, each bite is a taste sensation.
        Join us for a culinary adventure you won't forget! </p>
       <button className='btn' onClick={()=>navigate("/QR")}> Order Here!</button>
      </div>
    </div>
  );
};

export default Home;





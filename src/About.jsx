import React, { useState, useEffect } from 'react';
import img3 from './assets/img3.jpeg';
import img6 from './assets/img6.jpeg';
import img5 from './assets/img5.jpeg';

const About = () => {
  const images = [img3, img6, img5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const containerStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <>
      <div className='about' style={containerStyle}>
        <div className='about-container'>
          <div className='left'>
            <h1>About Us</h1>
            <div className='left-about'>
              <p>At Spicy Craft, we don't just serve food; we serve experiences. Explore our culinary journey, where every spice tells a story Discover the artistry behind every dish as we blend tradition with innovation, creating culinary masterpieces that leave a lasting impression on your palate Join our flavor revolution and indulge in a culinary journey that celebrates diversity, creativity, and the joy of indulging in the extraordinary.</p>
            </div>
          </div>
          <div className='right'>
            <div className='image-container'>
              <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

import React from 'react';
import './App.css'; 

const ServicePage = () => {
  const handleExploreClick = () => {
    console.log("Explore More clicked!");
  };

  return (
    <div className='main-service'>
      <div>
        <h2 className='service-heading'>Our Service</h2>
        <p className='service-para'>We offer a variety of services to satisfy every craving. At SpiecyCraft, we serve up more than just great food we deliver exceptional experiences through our diverse range of services.</p>
      </div>
      <div className="service-page">
        <div className="service-card">
          <img src="src/assets/new1.jpg" alt="Service 1" />
          <p>Transforming dreams into cherished memories, our marriage hall offers comprehensive wedding services tailored to your every need.</p>
          <button className="explore-button" onClick={handleExploreClick}>Explore More</button>
        </div>
        <div className="service-card">
          <img src="src/assets/new2.webp" alt="Service 2" />
          <p>Create lasting moments of togetherness in our family hall, designed for joyful gatherings, celebration and cherished happiness with beloveds.</p>
          <button className="explore-button" onClick={handleExploreClick}>Explore More</button>
        </div>
        <div className="service-card">
          <img src="src/assets/new3.jpg" alt="Service 3" />
          <p>Crafting enchanting and magical birthday celebrations in our dedicated hall, where every detail is meticulously tailored to make your special day truly unforgettable.</p>
          <button className="explore-button" onClick={handleExploreClick}>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;








import React, { useState } from "react";
import MenuData from "./components/MenuData";
import ChikenListData from "./components/ChikenListData"; 
import Vegetarian from "./components/Vegetrain"; // Assuming this is the correct component name
import { FaCartArrowDown } from "react-icons/fa";

const Menulist = () => {
  const [menuData] = useState(MenuData);
  const [chickenList] = useState(ChikenListData); 
  const [vegetarianList] = useState(Vegetarian) 

  return (
    <>
      <section>
        <div className="menulist">
          <h2 className="menu-list-text">Junk food</h2>
          <div className="menulist-container">
            {menuData.map(product => (
              <div className="menulist-box" key={product.id}>
                <img className="menu-img" src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <FaCartArrowDown className="menu-icon" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <h2 className="menu-list-text">Chicken</h2>
        <div className="menulist-container">
          {chickenList.map(product => (
            <div className="menulist-box" key={product.id}>
              <img className="menu-img" src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <FaCartArrowDown className="menu-icon" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="menu-list-text">Vegetarian</h2>
        <div className="menulist-container">
          {vegetarianList.map(product => (
            <div className="menulist-box" key={product.id}>
              <img className="menu-img" src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <FaCartArrowDown className="menu-icon" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menulist;

import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from 'react';

const Nav = () => {
    const [menuIcon, setMenuIcon] = useState(false);
   
    return (
        <div className={menuIcon ? "navbar active" : "navbar"}>
            <ul className='navbar-list '>
                <li>
                    <NavLink to='/' className="navbar-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to='/About' className="navbar-link">About</NavLink>
                </li>
                <li>
                    <NavLink to='/Menu' className="navbar-link">Menu</NavLink>
                </li>
                <li>
                    <NavLink to='/Service' className="navbar-link">Service</NavLink>
                </li>
                <li>
                    <NavLink to='/Contact' className="navbar-link">Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/Cart' className="navbar-link cart-trolley-link">
                        <FaShoppingCart className="cart-trolley" />
                        <span className='cart-total-item'>10</span>
                    </NavLink>
                </li>
            </ul>
            <div className='mobile-navbar-btn'>
                {!menuIcon && (
                    <CgMenu name="menu-outline" className='mobile-nav-icon' style={{ color: "white", fontSize: '2rem' }}
                        onClick={() => setMenuIcon(true)} />
                )}
                {menuIcon && (
                    <CgClose name="close-outline" className='mobile-nav-icon close-outline ' style={{ color: 'white', fontSize: '2rem' }}
                        onClick={() => setMenuIcon(false)} />
                )}
            </div>
            {menuIcon && (
                <div className="close-icon-navbar">
                    <CgClose name="close-outline" className='mobile-nav-icon close-outline ' style={{ color: 'white', fontSize: '2rem' }}
                        onClick={() => setMenuIcon(false)} />
                </div>
            )}
        </div>
    )
}

export default Nav;



import { NavLink } from 'react-router-dom';

import Nav from './Nav';

const Header = () => {
  return (
    <div className='Header'>
      <NavLink to="/">
      <h2 className='logo'> SpiceCraft</h2>
     
      </NavLink>
      <Nav /> 


    </div>
  );
}

export default Header;
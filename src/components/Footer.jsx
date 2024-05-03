import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
<>
<div className='footer'>
<h3 className='footer-heading'>SpiceCraft.</h3>
<p className='footer-para'>Flame-kissed flavors, Charm in each bite.</p>
<div className='footer-social'>
    <h3 className='footer-heading' > Follow us </h3>
    </div>
    <div className='footer-icon'>
   <div>
   <FaFacebook  className='icon'/>
   </div>
   <div>
   <FaWhatsapp  className='icon'/>
   </div>
   <div>
   <FaInstagram className='icon' />
  </div>
</div>
<div className='footer-bottom' style={{marginTop:"2rem"}}>
<hr/>

    <p style={{color:"white", textAlign:"center", cursor:"pointer"}}>@2024 SpiceCraft. All Rights Reserved</p>


</div>


</div>
</>
  )
}

export default Footer;

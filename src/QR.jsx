import React from 'react'
import QRCode from 'react-qr-code';
import './App.css'
const QR = () => {
  return (
   <div className='QR'>
   <div className='main' style={{width:'30rem', height:'32rem',backgroundColor:'rgba(0, 0, 0, 0.5)', border:"2px solid white", marginTop:'2rem',marginLeft:'22rem', borderRadius:'2rem'}}>
   <h1 style={{color:'white', fontSize:'5rem', textAlign:'center',fontFamily:'Brush Script MT'}}> Menu</h1>
   <p style={{textAlign:'center', fontSize:'2rem', color:'white'}}> FOR A CONTACTLESS MENU, SCAN QR CODE</p>
 <div style={{display:"flex", justifyContent:"center", alignItems:"center", cursor:'pointer', marginTop:'2rem' }}>
 <QRCode 
        size={200}
        bgColor='white'
        fgColor='black'
        value='</Menu>' 
       
        />
 </div>



   </div>

   </div>
  )
}

export default QR;



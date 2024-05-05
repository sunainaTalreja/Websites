import React from 'react'
import QRCode from 'react-qr-code';
import './App.css'
const QR = () => {
  return (
   <div className='QR'>
   <div className='QR-main'>
   <h1 className='QR-h1'> Menu</h1>
   <p className='QR-p'> FOR A CONTACTLESS MENU, SCAN QR CODE</p>
 <div className='QR-Code'>
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



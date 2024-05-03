

const Contact = () => {
  return (
    <div>
      <div className='container-contact'>
        <h2 className='heading-contact'>Feel Free To Contact Us</h2>
     </div>
     <div className='contact-form'>
     
     <form action='#' method='post' className='contact-inputs'>
     <input type='text' name='Username' placeholder='Username' autoComplete='off' required style={{border:"1px solid black"}}  />
     <input type='email' name='Email' placeholder='Email' autoComplete='off' required style={{border:"1px solid black"}} />
     <textarea name='message' cols={30} rows={6} autoComplete='off' required style={{border:"1px solid black"}}></textarea>
     <button className='btn-contact'>submit</button>

     </form>

     </div>

     </div>

     
  )
}

export default Contact;

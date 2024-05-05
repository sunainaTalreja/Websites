

const Contact = () => {
  return (
    <>
      <h2 className='heading-contact'>Feel Free To Contact Us</h2>
     <div className='contact-form'>
     <form action='#' method='post' className='contact-inputs'>
     <input type='text' name='Username' placeholder='Username' autoComplete='off' required className="inputs"  />
     <input type='email' name='Email' placeholder='Email' autoComplete='off' required className="inputs" />
     <textarea name='message' cols={30} rows={6} autoComplete='off' required className="inputs"></textarea>
     <button className='btn-contact'>submit</button>
     </form>
     </div> 
</>
     
  )
}

export default Contact;

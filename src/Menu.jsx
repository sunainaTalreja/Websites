import pizza from './assets/pizza.png';
import chicken from './assets/chicken.png';
import desert from './assets/desert.png';
import veg from './assets/veg.png';
import salad from './assets/salad.png';




const Menu = () => {
 
  return ( 
    <> 
    <div className='menu'>
    <h1 className='menu-text'> Our Menu</h1>
    <p className='menu-para'>Indulge in an exquisite menu of delights.</p>
    </div>
    <div className="Menu-type">
      <div className="container">
      <div className="box">
      <div className="img-box">
      <img src={pizza}  />
      </div>
      <div className='menu-detail'>
      <p className='text'>Junk food</p>

      </div>

      </div>
      <div className="box">
      <div className="img-box">
      <img src={chicken} />
      </div>
      <div className='menu-detail'>
      <p>Chicken</p>

      </div>

      </div>
    
      <div className="box">
      <div className="img-box">
      <img src={desert} />
      </div>
      <div className='menu-detail'>
      <p>Desert</p>

      </div>

      </div>

      <div className="box">
      <div className="img-box">
      <img src={veg} />
      </div>
      <div className='menu-detail'>
      <p>Vegetrain</p>

      </div>

      </div>
     

      <div className="box">
      <div className="img-box">
      <img src={salad} />
      </div>
      <div className='menu-detail'>
      <p>Salid</p>

      </div>

      </div>


      </div>
    </div>
  
    

     </>

    
  )
}


export default Menu;



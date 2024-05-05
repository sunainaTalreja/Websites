import food from './assets/food.jpg'
import cc from './assets/cc.jpg';
import cup from './assets/cup.webp';
import vegetable from './assets/vegetable.jpg';
import last from './assets/last.jpg';




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
      <img src={food}  />
      </div>
      <div className='menu-detail'>
      <p className='text'>Junk food</p>

      </div>

      </div>
      <div className="box">
      <div className="img-box">
      <img src={cc} />
      </div>
      <div className='menu-detail'>
      <p>Chicken</p>

      </div>

      </div>
    
      <div className="box">
      <div className="img-box">
      <img src={cup} />
      </div>
      <div className='menu-detail'>
      <p>Dessert</p>

      </div>

      </div>

      <div className="box">
      <div className="img-box">
      <img src={vegetable} />
      </div>
      <div className='menu-detail'>
      <p>Vegetrain</p>

      </div>

      </div>
     

      <div className="box">
      <div className="img-box">
      <img src={last} />
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



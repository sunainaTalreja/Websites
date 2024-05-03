import { IoNewspaper } from "react-icons/io5";
import { TbShoppingCartCheck } from "react-icons/tb";
import { RiLoader3Line } from "react-icons/ri";
import { FaGift } from "react-icons/fa";

const History = () => {
  return (
    <>
        <div className="History">
     <div className="History-header">
     <div className="History-text">
     <p className="history-p">ESTIMATED TIME <br/>
     30 minutes</p>
     <p className="history-p1"  > ORDER NUMBER <br/> #2482011</p> 
     </div>
     </div>
     <div className="history-icon">
     <IoNewspaper className="iconn" />
     <p className="icon-text"> Order Placed <br/>
      We have recevied your order.</p>
     </div>
     <div className="history-icon">
     <TbShoppingCartCheck className="iconn" />
     <p className="icon-text"> Order Confrimed <br/>
      Your order has been confrimed.</p>
     </div>
     <div className="history-icon">
     <RiLoader3Line className="iconn" />
     <p className="icon-text"> Order Processed <br/>
      We are perparing your order.</p>
     </div>
     <div className="history-icon">
     <FaGift className="iconnn" />
     <p className="icon-text"> Delivered <br/>
      </p>
   
     </div>

    </div>

    </>
   
      

  )
}

export default History;

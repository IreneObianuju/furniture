import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import image from "../assets/images/chair-1.png"
import image2 from "../assets/images/chair2.png"
import image3 from "../assets/images/chair3.png"
import image4 from "../assets/images/chair6.webp"
import image5 from "../assets/images/dinning.png"
import image6 from "../assets/images/chair5.webp"
import image7 from "../assets/images/table1.jpg"
import image8 from "../assets/images/executive.png"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import "./Shop.css"
import { all_products } from "../utils/products"
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import DownwardArrowAnimation from "../components/Downwardpointer"
import "../App.css"


const Shop = ()=>{
   const [cart, setCart] = useState([]);
   const addToCart =(product_id)=>{
      let currentCart = [...cart];
      currentCart.push(product_id);
      setCart(currentCart);
      localStorage.setItem('cart', JSON.stringify(currentCart))
   }

   useEffect(()=>{
      const savedCart = localStorage.getItem('cart');
      if(JSON.parse(savedCart)){
         setCart(JSON.parse(savedCart)) 
      }
   }, []);
   return(
    <>
        <Navbar cart={cart} />

        <div className="body1">
       
          <div className="section">
             <div className="sect">
                     <div className="text">
                        <h1>Shop Classy Furnitures Here</h1>
                        < DownwardArrowAnimation />
                     </div>
                    

                     {/* <div
                           className="moving-pointer"
                           style={{ top: `${pointerTop}px` }}
                        /> */}
                    
               </div>
           </div>

       </div>




       <main>
         <div className="main-sect">
            <Sidebar/>
      
             <div className="right">
              
              
                  {
                     
                     all_products.map((product, index)=>(

                        
                        <div className="right-content">
                           {/* <div className="overlay"></div> */}
                          

                        <div className="upper">
                        <div className="overlay"></div>

                       
                         
                           <div className="pic">
                          
                            
                           
                              {/* <div className="text-overlay">
                                 30%
                              </div> */}
                             
                              
                                 <img src={product.cover_photo} alt="chair_image" className="pics"/>
                                
                                 <div className="bnts">
                                    <Link to ="/cart"><button className="bnt" onClick={()=>{
                                       addToCart(product.id)
                                    }}>ADD TO CART +</button></Link>
                                    <Link ><button className="bnt1">BUY NOW <FontAwesomeIcon icon={faShoppingCart}/> </button></Link>
                                 </div>
                              
                              

                           </div>
                        </div>
                        
                              <div className="card-body">
                                 <span className="flo">{product.name}</span>
                                 <div className="price">
                                 {/* <span className="spn"> ${product.pri.00</span> */}
                                 <span className="spn1"> ${product.price}.00</span>
                                 <span className="spn2"> &#9734;&#9734;&#9734;&#9734;&#9734;</span>
                                 </div>

                              </div>
                        
                   </div>

                     ))
                  }
                  
           </div>


         </div>

         </main> 

         <Footer/>
      
   
    </>

   )

    
}





export default Shop;
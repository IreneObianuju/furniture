import Navbar from "../components/Navbar"
import {Link} from "react-router-dom"
import "./Shop.css"
import DownwardArrowAnimation from "../components/Downwardpointer"
import image2 from "../assets/images/chair2.png"
import image3 from "../assets/images/chair3.png"
import Footer from "../components/Footer"



const Cart = ()=>{
   return(
    <>
      <Navbar  />
   
        <div className="body1">
       
       <div className="section">
          <div className="sect">
                  <div className="text">
                     <h1>Cart</h1>
                     < DownwardArrowAnimation />
                  </div>
                 
                 
            </div>
        </div>

    </div>

    <div className="cart">
      <div className="cart-line">
         <div className="listing">
            <h3 className="list-table">Image</h3>
            <h3 className="list-table">Product</h3>
            <h3 className="list-table">Price</h3>
            <h3 className="list-table">Quantity</h3>
            <h3 className="list-table">Total</h3>
            <h3 className="list-table">Remove</h3>
            
         </div>
      <hr className="full-width-hr2" />
      <div className="details">
         <img src={image2} alt="chair" className="small-chair" />
         <h3 className="rows">Product 1</h3>
         <p className="dollar">$120.00</p>
         <div className="semi-div">
            <span className="minus">-</span>
            <button className="figure">1</button>
            <span className="minus">+</span>

         </div>
         <p className="dollar">$120.00</p>
         <h4  className="dollar1">x</h4>


      </div>
      <hr className="full-width-hr3" />
      <div className="details">
         <img src={image3} alt="chair" className="small-chair" />
         <h3 className="rows">Product 2</h3>
         <p className="dollar">$120.00</p>
         <div className="semi-div">
            <span className="minus">-</span>
            <button className="figure">1</button>
            <span className="minus">+</span>

         </div>
         <p className="dollar">$120.00</p>
         <h4  className="dollar1">x</h4>


      </div>
      <hr className="full-width-hr3" />
      <div className="third-line">
         <Link to ="/" ><button className="but5">Update Cart</button></Link>
        <Link to = "/"> <button className ="but6">Continue Shopping</button></Link>
        <div className="cart-total">
         <h2 className="cart-total-text">CART TOTALS</h2>
         <hr className="small-hr"/>
        </div>
      </div>

      <div className="final-div">
         <div className="first-final">
            <h3 className="coupon">Coupon</h3>
            <p className="coupon-text">
               Enter your coupon code if you have one
            </p>
            <div className="coups">
               <input className="coup" placeholder="coupon code"/>
               <Link to ="/" ><button className="but7" >Apply <br/> Coupon</button></Link>
            </div>
            

         </div>
         <div className="second-final">
            <div className="price-flex">
            <p className="price-total">Subtotal</p>
            <p className="price-figure">$230.00</p>


            </div>
            <div className="price-flex">
            <p className="price-total2">Total</p>
            <p className="price-figure2">$230.00</p>
            </div>

            <Link to = "/"> <button className ="but6">Proceed To Checkout</button></Link>
           

         </div>
      </div>

      </div>
 
  
    
    </div>

    <Footer/>




    </>
    

   )

    
}





export default Cart;
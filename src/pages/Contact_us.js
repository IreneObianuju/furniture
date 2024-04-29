import Navbar from "../components/Navbar"
import heroImg from "../assets/images/couch.png"
import dotImage from "../assets/images/dots-light.svg"
import{Link} from "react-router-dom"

const Contact_us = ()=>{
   return(
    <>
   <Navbar  />
   <div className="body">
       
       <div className="section">
                  <div className="sect">
                      <div className="text">
                          <h1>About Us</h1>

                          <p className="texts">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet <br/> velit. Aliquam vulputate velit imperdiet dolor tempor  tristique. </p>
                          <div className="button">
                              <Link to = "/shop"><button className="but1">Shop Now</button></Link>
                              <Link to = "/services"><button className ="but2">Explore</button></Link>
                          </div>
                      </div>
                      <div className="image1">
                          <img src={dotImage} className="dots"/>
                          <img src={heroImg} className="img2" />

                      </div>
                  </div>
                 </div>

       </div>
    </>
    

   )

    
}





export default Contact_us;
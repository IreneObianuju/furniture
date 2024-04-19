import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Home =() =>{
    return(
        <>
          <Navbar />
        <div className="body">
       
         <div className="section">
                    <div className="sect">
                        <div className="text">
                            <h1>Modern interior <br/>Design Studio</h1>

                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet <br/> velit. Aliquam vulputate velit imperdiet dolor tempor t</p>
                            <div className="button">
                                <button className="but1">Shop Now</button>
                                <button className ="but2">Explore</button>
                            </div>
                        </div>
                        <div className="image1">

                        </div>
                    </div>
                   </div>

         </div>
        </>
    )
}
export default Home;
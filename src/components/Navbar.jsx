import { Link } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
const Navbar = ()=>{
    return (
        <div className="nav">
            <div className="navbar">
                <div className="logo"><span>Furni</span><span className="dot">.</span></div>
                <div className="right-nav">
                    <ul className="nav-links">
                        <li>
                            <Link className="first"  to="/">Home</Link>
                        </li>

                        <li>
                            <Link className="first1"  to="/">Shop</Link>
                        </li>

                        <li>
                            <Link className="first1"  to="/">About us</Link>
                        </li>

                        <li>
                            <Link className="first1"   to="/">Services</Link>
                        </li>
                        <li>
                            <Link className="first1"  to="/">Blogs</Link>
                        </li>

                        <li>
                            <Link className="first1"  to="/">Contact us</Link>
                        </li>
                        
                    </ul>

                    <div>
                        <ul className="nav-links1">
                            <li>
                                <Link className="first2" to="/" style={{color:"black"}}>
                                    <FontAwesomeIcon icon={faUser}/>

                                </Link>
                            </li>
                            <li>
                                <Link className="first2" to="/" style={{color:"black"}}>
                                    <FontAwesomeIcon icon={faShoppingCart}/>

                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

            
             </div>
             
        </div>
    );
}


export default Navbar;
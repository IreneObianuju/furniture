import {Link, link} from "react-router-dom"
import Image from "../assets/images/sofa.png"
import "../App.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer= ()=>{
    return (
        <div className="footer">
            <div className="first-footer">
                <div className="left-side">
                    <div className="container">
                        <h3 className="sub"><span className="sub2"> &#x2709;</span><span className="sub3">Subscribe to Newsletter</span></h3>
                        <div className="contain">
                            <input type="search" placeholder="Enter name"/>
                            <input type="search" placeholder="Enter email"/>
                            <Link to ="/cart">
                                <button className="buttons">
                                    <FontAwesomeIcon icon={faPaperPlane} className="font"/>
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="right-side">
                    <img src = {Image} className="sofa"/>
                </div>
            </div>

            <div className="info">
                <div className="furni">
                <div className="logos">Furni.</div>
                <p className="lorem">
                 Donec facilisis quam ut purus rutrum lobortis.<br/>
                 Donec vitae odio quis nisl dapibus malesuada. <br/>
                 Nullam ac aliquet velit. Aliquam vulputate velit <br/>
                imperdiet dolor tempor tristique. Pellentesque <br/>habitant
                </p>

                </div>
                <div className="first-ul">
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="first-ul">
                    <ul>
                        <li>Support</li>
                        <li>Knowledge base</li>
                        <li>Live chat</li>
                     
                    </ul>
                </div>
                
                 <div className="first-ul">
                    <ul>
                        <li>Jobs</li>
                        <li>Our team</li>
                        <li>Leadership</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="first-ul">
                    <ul>
                        <li>Nordic Chair</li>
                        <li>Kruzo Aero</li>
                        <li>Ergonomic Chair</li>
                      
                    </ul>
                </div>
            </div>

            <div className="socials">
                <button className="facebook">
                    <FontAwesomeIcon icon={faFacebook} className="font1"/>
                </button>
                <button className="facebook">
                    <FontAwesomeIcon icon={faTwitter} className="font1"/>
                </button>

                <button className="facebook">
                    <FontAwesomeIcon icon={faInstagram} className="font1"/>
                </button>
                <button className="facebook">
                    <FontAwesomeIcon icon={faLinkedin} className="font1"/>
                </button>
                
            </div>

            <hr className="full-width-hr" />

            <div className="last-footer">
             <div className="long-div">
                    <p className="long">Copyright ©2024. All Rights Reserved. — Designed with love by Untree.co</p>
                    <p className="long">Distributed By ThemeWagon</p>
             </div>
                <p className="long2">Terms & Conditions</p>
                <p className="long3">Privacy Policy</p>
         </div>



      

        </div>

    )
}

export default Footer;
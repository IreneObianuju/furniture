// import logo from './logo.svg';
// import icon from './assets/images/logo512.png' 
// import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Check_out from './pages/Check-out';
import History from './pages/History';
import Login from './pages/Login';
import Product_details from './pages/Product_details';
import Shop from './pages/Shop';
import Sign_up from './pages/Sign-up'
import About_us from './pages/About_us';
import Contact_us from './pages/Contact_us';
import Blog from './pages/Blog';
import Services from './pages/Services';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/about" element={<About/>}/>
    <Route path ="/profile" element={<Profile/>}/>
    <Route path ="/cart" element={<Cart/>}/>
    <Route path ="/check-out" element={<Check_out/>}/>
    <Route path ="/history" element={<History/>}/>
    <Route path ="/login" element={<Login/>}/>
    <Route path ="/product_details" element={<Product_details/>}/>
    <Route path ="/shop" element={<Shop/>}/>
    <Route path ="/sign-up" element={<Sign_up/>}/>
    <Route path ="/about_us" element={<About_us/>}/>
    <Route path ="/contact_us" element={<Contact_us/>}/>
    <Route path ="/blog" element={<Blog/>}/>
    <Route path ="/services" element={<Services/>}/>
    </Routes>
    </BrowserRouter>
  // <>
  // <header>
  // <div><img src ={icon} className = 'main-icon' alte ='logo'/></div>
  //   <div>
  //     <ul>
  //       <li>
  //         <a href ="#">Home</a>
  //       </li>
  //     </ul>
  //   </div>
  // </header>
  // </>
  );
}
export function Greet(){
  return(
    <>Hello</>
  )
}
export default App;

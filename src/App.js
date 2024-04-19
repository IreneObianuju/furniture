// import logo from './logo.svg';
// import icon from './assets/images/logo512.png' 
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Check_out from './pages/Check-out';
import History from './pages/History';
import Login from './pages/Login';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Sign_up from './pages/Sign-up'



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/about" element={<About/>}/>
     <Route path ="/profile" element={<Profile/>}/>
     <Route path ="/cart" element={<Cart/>}/>
<Route path ="/cart" element={<Cart/>}/>
<Route path ="/cart" element={<Cart/>}/>
<Route path ="/cart" element={<Cart/>}/>
     <Route path ="/cart" element={<Cart/>}/>
<Route path ="/cart" element={<Cart/>}/>
     <Route path ="/cart" element={<Cart/>}/>
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

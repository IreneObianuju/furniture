import {Link} from "react-router-dom"
import '../App.css'

const Sidebar =()=>{
    return(
   
    
          <div className="sidebar">
            <div className="write">
               <h3 className="space"> CLASSY CHAIRS</h3>
               <p className="little">
                  <Link to = "/shop" className="link">Executive</Link><br/>
                  <Link to = "/shop"className="link" >Reading </Link><br/>
                  <Link to = "/shop" className="link">Classic </Link><br/>
                  <Link to ="/shop"className="link" >Bedside </Link><br/>
                  <Link to ="/shop"className="link" >Modern</Link><br/>
                  <Link to ="/shop"className="link" >Dinning </Link><br/>
                  <Link to ="/shop" className="link">Modern </Link><br/>
                  <Link to ="/shop"className="link" >Ancient</Link><br/>
                  <Link to ="/shop"className="link" >Wine </Link><br/>
               </p>
               <h3 className="space"> TOP TABLES</h3>
               <p className="little">
                  <Link to ="/shop"className="link" >Executive</Link><br/>
                  <Link to ="/shop"className="link" >Reading </Link ><br/>
                  <Link to ="/shop"className="link">Classic </Link><br/>
                  <Link to ="/shop" className="link">Bedside </Link><br/>
                  <Link to ="/shop" className="link" >Office </Link><br/>
                  <Link to ="/shop"className="link" >Dinning </Link><br/>
                  <Link to ="/shop"className="link" >Modern </Link><br/>
                  <Link to ="/shop"className="link" >Ancient</Link><br/>
                  <Link to ="/shop"className="link">Wine </Link><br/>
                 
               </p>
               <h3 className="space"> DINNING SET</h3>
               <h3 className="space"> KITCHEN</h3>
               <h3 className="space">OUTDOOR</h3>
               <p className="little">             
                  <Link to ="/shop"className="link" >Modern </Link><br/>
                  <Link to ="/shop"className="link" >Ancient</Link ><br/>
                  <Link to ="/shop"className="link" >Wine </Link><br/>
                  <Link to ="/shop"className="link" >Classic </Link><br/>
                  <Link to ="/shop"className="link" >Bar Chair</Link>
               </p>


            </div>
          </div>
  
        
        
        
        
        
        
        
        
      




    )  
 }

 export  default Sidebar;
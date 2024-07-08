import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState,useEffect } from "react";
import {  useDispatch } from "react-redux";
import { userOut } from "./features/user/userSlice";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [scrolling, setScrolling] = useState(false);
    let disputch=useDispatch()
    const currentUser=useSelector(state=>state.user.currentUser)
    const naviget=useNavigate()

    useEffect(() => {
      window.onscroll = () => {
        if (window.scrollY > 50) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
    }, []);

    const exit = ()=>{
      disputch(userOut());
      naviget('/')
      
    }

    return ( <>
    <div className={scrolling ? 'navbar scrolled' : 'nav'}>
        <nav>
        <p style={{color:"white", fontSize:"15px"  , marginTop:"0%"}}>{currentUser&&`${currentUser.userName} שלום לך`}</p>
            <ul>
            
                  <li><Link to="WineList">מוצרים</Link></li>
                  <li><Link to="Basket">סל</Link></li>
                  <li><Button onClick={()=>exit()}>יציאה</Button></li>
                  <li><Link to="/">home</Link></li> 

            </ul>
            
        </nav>
    </div>
    </>);
}
 
export default NavBar;
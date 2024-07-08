import { Link } from "react-router-dom";
import "./NavBarAdmin.css";
import { useEffect,useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { userOut } from "./features/user/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBarAdmin = () => {
    let disputch=useDispatch()
    const [scrolling, setScrolling] = useState(false);
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

    return (  <>
    
        <div className={scrolling ? 'navbar scrolled' : 'nav'}>
            <nav>
            <p style={{color:"white", fontSize:"15px",marginTop:"0%"}}>{currentUser&&`${currentUser.userName} שלום לך`}</p>
                <ul>
                    <li><Link to="WineList">מוצרים</Link></li>
                    <li><Link to="addWine">הוספת מוצר</Link></li>
                    <li><Link to="AllOrder">כל ההזמנות</Link></li>
                    <li><Button onClick={()=>exit()}>יציאה</Button></li>
                    <li><Link to="/">home</Link></li>

                </ul>
            </nav>
        </div>
        </>);
}
 
export default NavBarAdmin;
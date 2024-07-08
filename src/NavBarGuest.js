import { Link } from "react-router-dom";
import "./NavBarGuest.css";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";


const NavBarGuest = () => {

    const [scrolling, setScrolling] = useState(false);
   

    useEffect(() => {
      window.onscroll = () => {
        if (window.scrollY > 50) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
    }, []);

    return (<>
            <div className={scrolling ? 'navbar scrolled' : 'nav'}>
                <nav>
                <p style={{color:"white", fontSize:"15px" , marginTop:"0%"}}> שלום אורח </p>
                    <ul>
                      
                        <li><Link to="WineList">מוצרים</Link></li>
                        <li><Link to="Basket">סל</Link></li>
                        <li><Link to="Login">כניסה</Link></li>
                        <li><Link to="Signup">הרשמה</Link></li>
                        <li><Link to="/">home</Link></li> 
 
                    </ul>
                </nav>
            </div>
        </>);
}
 
export default NavBarGuest;
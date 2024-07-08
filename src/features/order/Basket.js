import { useSelector } from "react-redux";
import {basket} from './orderSlice'
import { addToBasket,removeFromBasket } from "../order/orderSlice";
import { useDispatch } from "react-redux";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import "./basket.css"


const Basket = () => {
    const navigate = useNavigate()
    let basket= useSelector(st=>st.order.basket);
    const dispatch = useDispatch();

    let arr = useSelector((st) => st.order.basket);

  const sum = () => {
    let sum = 0;
    arr.forEach((one) => {
      sum += one.Price * one.amount;
    });
    return sum;
  };

  const sumQty = () => {
    let sum = 0;
    arr.forEach((element) => {
      sum += +element.amount;
    });
    return sum;
  };
    return ( <>
    <h1>סל קניות</h1>

    <div className="basket">
        <div className="myItems">
            {basket.map(item=>
            <div key={item._id} className="sss">
                <div className="text">
                    <h4>{item.Name}</h4>
                    <p>{item.Price}$</p>
                    <p>כמות:{item.amount}</p>
                </div>
                <div className="img-button">
                    <img src={item.src} alt={item.Name}/> 
                    <input type="button" value='+' onClick={() => {dispatch(addToBasket(item))}}/>
                    <input type="button" value='-' onClick={() =>{dispatch(removeFromBasket(item))}}/>
                </div>
            </div>)} 
            
        </div>
        <div className="op">
        <h2>לתשלום:{sum()}$</h2>
        <h2>כמות מוצרים:{sumQty()}</h2>
        <Button type="submit" variant="contained" className="continue-button" onClick={() => navigate('/OrderForm')}>ביצוע הזמנה</Button>    
        <Button type="submit" variant="contained" className="continue-button" onClick={() => navigate('/')}>המשך קניה</Button>        
        </div>
    </div>
        
    </> );
}
 
export default Basket;
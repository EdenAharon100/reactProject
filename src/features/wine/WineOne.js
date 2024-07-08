import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket,removeFromBasket } from "../order/orderSlice";
import { deleteWine } from "./wineApi";
import { useNavigate } from "react-router-dom";

const WineOne = ({one}) => {

    const role = useSelector(state=>state.user.currentUser?.role)
    const dispatch = useDispatch();
    const basket = useSelector((state) => state.order.basket);
    const userToken = useSelector((state) => state.user.currentUser?.token);
    const navigate= useNavigate()

    const funcRemov= async ()=>{
        const confirmed=window.confirm("אתה בטוח ):")
     if (confirmed)
     try{
    let res=await deleteWine(one._id,userToken)
    alert("):נמחקתי")
    }
    catch{
        alert("(:לא נמחקתי")
    }
    }

    return (  
        <div className="oneWine" >
            <Link  to={"Details/" + one._id}> <img src={one.src} alt={one.Name}/> </Link>
            <h2>{one.Name}</h2>
            <h4>{one.Price}</h4>
            {role!=='ADMIN'&&<input type="button" value='+' onClick={() => {dispatch(addToBasket(one))}}/>}
            {role!=='ADMIN'&&<input type="button" value='-' onClick={() =>{dispatch(removeFromBasket(one))}}/>}
            {role=='ADMIN'&&<input type="button" value='מחיקה' onClick={funcRemov}/>}
            {role=='ADMIN'&&<input type="button" value='עריכה' onClick={() => {navigate(`/EditWine`, { state: { item: one } });}}/>}
        </div>
    );
};
 
export default WineOne;
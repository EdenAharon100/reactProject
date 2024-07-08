import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../order/orderSlice";
import { useState } from "react";
import { getWineById } from "./wineApi";
import { useEffect } from "react";
import './Details.css'


const Detail = () => {
    let params = useParams();
    let navigate=useNavigate();
    let [productDetails, setProductDetails] = useState(null)
    let dispatch=useDispatch()

    useEffect(() => {
        getWineById(params.id)
            .then(res => {
                setProductDetails(res.data)
            })
            .catch((error) => {
                alert("Sorry, couldn't get this product");
                console.log("error");
            });
    }, [params.id]);
        
    

    return (
      <div style={{ position: "fixed", top: 0, width: "100vw", height: "100vh" ,backgroundColor:"white"}} className="details">
            {" "}<div className="all-detail">
                    <div className="detail-text">
                        <h1>{productDetails?.Name}</h1>
                        <h4>מחיר:${productDetails?.Price}</h4>
                        <h4>מכיל:{productDetails?.Description}</h4>
                        <h4>אחוזי אלכוהול:{productDetails?.alcohol}%</h4>
                        <h4>מתאים ל:{productDetails?.MatchWithFood}</h4>
                    </div>
                    <div className="detail2">
                        <img src={productDetails?.src} width="220vw" height="280vh" alt={params.name} className="img-detail"></img>
                        <div className="button">
                            <button className='sign' onClick={()=>{dispatch(addToBasket(productDetails))}}>+</button>
                
                            <button className='sign' onClick={()=>{dispatch(removeFromBasket(productDetails))}}>-</button>
                        </div>
                    </div>
                </div>
            <input type="button" value={"back"} onClick={()=>{navigate(-1)}}/>
      </div>
    );
}
 
export default Detail;
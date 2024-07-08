import React, { useEffect, useState } from "react";
import { getAllOrders, updateOrder } from "./orderApi";
import { useSelector } from "react-redux";
import "./AllOrders.css"

export const AllOrders = () => {
  const token = useSelector((state) => state.user.currentUser?.token);
  
  const [arr, setArr] = useState([]);

  useEffect(() => {
    getAllOrders(token)
      .then((res) => {
        setArr(res.data);
      })
      .catch(() => {
        alert("לא ניתן לטעון את המוצרים");
        console.log("error");
      });
  }, [token]);

  const send = (id) => {
    updateOrder(id, token)
      .then(() => {
        alert(" עודכן בהצלחה");
            window.location.reload();
      })
      .catch((err) => {
        alert("לא ניתן לשנות את מצב ההזמנה");
        console.error("error", err);
      });
  };

  return (
    <><div className="aaa">
      {arr.map((item) => (
        <div key={item._id} className="order-card" style={{border:"black solid 1px" , marginTop:"10px", marginBottom:"10px" , textAlign:"left"}}>
          <p>{item.address}:כתובת</p>
          <p>{item.dueDate}</p>
          <p>isCameOut: {item.isDone ? "Yes" : "No"}</p>
          {!item.isDone && (<button className="send-button" onClick={() => send(item._id)}> Send </button>
          )}
        </div>
      ))}</div>
    </>
  );
};

export default AllOrders;
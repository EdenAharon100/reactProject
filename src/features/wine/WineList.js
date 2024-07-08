import { useState } from "react";
import WineOne from "./WineOne";
import { useEffect } from "react";
import {getTotalWine, getWine} from "./wineApi" 
import { Outlet } from "react-router-dom";
import "./WineList.css"
import VideoCom from "./VideoCom";
import {Pagination} from "@mui/material"

const WineList = () => {
    let [arr,setArr]=useState([]);
    let [page,setPage]=useState(1);
    let [pageCount,setPageCount]=useState(1);

    useEffect(()=>{
        getWine(page,10,"").then(res=>{
            setArr(res.data)
        }).catch(err=>{
            alert("לא ניתן לטעון את המוצרים")
        });
    
    getTotalWine().then((res)=>{
        setPageCount(Math.ceil(res.data.length/10))
    })
    .catch((err)=>{
        console.log(err)
    })}
    ,[page]);

    const handelPageChange =(evet,value) =>{
        setPage(value)
    }

    return (<>
         <VideoCom/>
         <Pagination count={pageCount} page={page} onChange={handelPageChange} style={{color:"black"}}/>

            <div className="allWine">
                {arr.map(item=><div key={item._id}><WineOne one={item}/></div>)}
            </div>
            <Pagination count={pageCount} page={page} onChange={handelPageChange} style={{color:"black"}}/>
        <Outlet/>
        </> 
     );
}
 
export default WineList;
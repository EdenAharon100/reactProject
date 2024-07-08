import './App.css';
import { Route, Routes } from 'react-router-dom';
import WineList from './features/wine/WineList';
import Detail from './features/wine/Details';
import NavBar from './NavBar';
import AllOrders from './features/order/AllOrder';
import EditWine from './features/wine/editWine';
import Basket from './features/order/Basket';
import { useDispatch, useSelector } from 'react-redux';
import NavBarAdmin from './NavBarAdmin';
import NavBarGuest from './NavBarGuest';
import Login from './features/user/Login';
import SignUp from './features/user/Signup2';
import AddWine from './features/wine/AddWine';
import Home from './Home';
import MiniBasket from './features/order/MiniBasket';
import Footer from './Footer';
import OrderForm from './features/order/OrderForm';
import { useEffect } from 'react';
import { UseDispatch } from 'react-redux';
import { userIn } from './features/user/userSlice';
import ProtectedRouteForManager from './ProtectedRouteForManager';
import ProtectedRouteForUser from './ProtectedRouteForUser';

function App() {
  let dispatch=useDispatch()
  const currentUser=useSelector(state=>state.user.currentUser)
  useEffect(()=>{
    let u = localStorage.getItem("currentUser")
    if(u){
      dispatch(userIn(JSON.parse(u)))
    }
  },[])

  console.log('user' ,currentUser);
  return (
    <div className="App">
      {currentUser ? (currentUser.role==="ADMIN" ? <NavBarAdmin/> : <NavBar/>) : <NavBarGuest/>}
      <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='WineList' element={<WineList/>}> 
                <Route path='details/:id' element={<Detail/>}/>
            </Route>
            <Route path='Basket' element={<Basket/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='AllOrder' element={<ProtectedRouteForManager><AllOrders/></ProtectedRouteForManager>}/>
            <Route path='Signup' element={<SignUp/>}/>
            <Route path='editWine' element={<ProtectedRouteForManager><EditWine/></ProtectedRouteForManager>}/>
            <Route path='AddWine' element={<ProtectedRouteForManager><AddWine/></ProtectedRouteForManager>}/>
            <Route path='OrderForm' element={<ProtectedRouteForUser><OrderForm/></ProtectedRouteForUser>}/>

      </Routes>
      
      <MiniBasket/>
      <Footer/>
    </div>
  );
}

export default App;
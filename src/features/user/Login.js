// import { useForm } from "react-hook-form";
// import { login   } from "./userApi";
// import { useDispatch } from "react-redux";
// import { userIn } from "./userSlice";

// const Login = () => {
//   let dispatch = useDispatch();
//   let {register,handleSubmit,formState: { errors },} = useForm();

//   const save = (data) => {
//     login(data)
//       .then((res) => {
//         alert("הצליח למצוא משתמש");
//         dispatch(userIn(res.data));
//         console.log(res);
//       })
//       .catch((err) => {
//         alert("לא הצליח למצוא משתמש" +err.response.data.message);
//         console.log(err);
//       });
//   };
//   return (
//     <form onSubmit={handleSubmit(save)}>
//       <label>מייל</label>
//       <input type="text" {...register("email")} />
//       <br/>
//       <label>סיסמרא</label>
//       <input type="text" {...register("password")} />
//       <br/>
      
     
// <input type="submit" />
//     </form>
//   );
// };

// export default Login;

// Login.js

import { useForm } from "react-hook-form";
import { login } from "./userApi";
import { useDispatch } from "react-redux";
import { userIn } from "./userSlice";
import './Login.css'; // Import the CSS file
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Login = () => {
  let dispatch = useDispatch();
  let navigate=useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const save = (data) => {
    login(data)
      .then((res) => {
        alert("Succeeded in finding a user");
      
        dispatch(userIn(res.data));
        console.log(res);
        navigate('/')
      })
      .catch((err) => {
        alert("Failed to find user" + err.response.data.message);
        console.log(err);
      });
  };
  const send=()=>{
    navigate('/Signup')
  }
  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit(save)}>
        <label className="Lladel">Email</label>
        <input type="text" {...register("email")} className="linput"/>

        <label className="Lladel">Password</label>
        <input type="password" {...register("password")} className="linput"/>

        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
      <button onClick={send}> הירשם</button>
    </div>
  );
};

export default Login;

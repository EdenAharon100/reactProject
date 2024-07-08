// import { useForm } from "react-hook-form";
// import { addUser   } from "./userApi";
// import { useDispatch } from "react-redux";
// import { userIn } from "./userSlice";
// import { useNavigate } from "react-router-dom";


// const SignUp = () => {
//   let dispatch = useDispatch();
//   let navigate=useNavigate();

//   let {register,handleSubmit,formState: { errors },} = useForm();

//   const save = (data) => {
//     addUser(data)
//       .then((res) => {
//         alert("הצליח להוסיף משתמש");
//         dispatch(userIn(res.data));
//         console.log(res);
//         navigate('/')

//       })
//       .catch((err) => {
//         alert("לא הצליח להרשם" +err.response.data.message);
//         console.log(err);
//       });
//   };
//   return (
//     <form onSubmit={handleSubmit(save)}>
//       <label>מייל</label>
//       <input type="text" {...register("email")} />
//       <br/>
//       <label>סיסמא</label>
//       <input type="text" {...register("password")} />
//       <br/>
//       <label>שם משתמש</label>
//       <input
//         type="text"
//         {...register("userName", {
//           required: { value: true, message: "שדה חובה" },
//         })}
//       />
//       {errors.userName && (
//         <span style={{ backgroundColor: "red" }}>
//           {errors.userName.message}
//         </span>
//       )}
//       <input type="submit" />
//     </form>
//   );
// };

// export default SignUp;

import { useForm } from "react-hook-form";
import { addUser } from "./userApi";
import { useDispatch } from "react-redux";
import { userIn } from "./userSlice";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"; // Import your CSS file for SignUp styling

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const save = (data) => {
    addUser(data)
      .then((res) => {
        alert("הצליח להוסיף משתמש");
        dispatch(userIn(res.data));
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        alert("לא הצליח להרשם" + err.response.data.message);
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(save)} className="signup-form">
      <label>Email</label>
      <input type="text" {...register("email" )} />
      {errors.userName && (<span className="error-message">{errors.userName.message}</span>)}
      <br />
      <label>Password</label>
      <input type="password" {...register("password")} />
      {errors.userName && (<span className="error-message">{errors.userName.message}</span>)}
      <br />
      <label>Username</label>
      <input type="text" {...register("userName", {required: { value: true, message: "שדה חובה" },})}/>
      {errors.userName && (<span className="error-message">{errors.userName.message}</span>)}
      <input type="submit" value="Sign Up" />
    </form>
  );
};

export default SignUp;

import { useForm } from "react-hook-form";
import { addWine } from "./wineApi";
import { useSelector } from "react-redux";
import "./AddWine.css"; // קובץ סגנון

const AddWine = () => {
  const userToken = useSelector((state) => state.user.currentUser?.token);
  const {register, handleSubmit, formState: { errors },reset,} = useForm();

  const save = (data) => {
    addWine(data, userToken)
      .then((res) => {
        alert("הצליח להוסיף מוצר");
        console.log(res);
        reset(); // לניקוי הטופס לאחר הצלחת שליחה
      })
      .catch((err) => {
        alert("לא הצליח להוסיף מוצר " + err.response.data.message);
        console.log(err);
      });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(save)}>
      <label className="form-label">שם המוצר</label>
      <input type="text" className={`form-input ${errors.Name ? "error" : ""}`}
        {...register("Name", { required: "שדה חובה" })}
      />
      {errors.Name && <p className="alert">{errors.Name.message}</p>}
      <br />
      <label className="form-label">מחיר</label>
      <input type="text"   className={`form-input ${errors.Price ? "error" : ""}`}
        {...register("Price", {
          required: "שדה חובה", 
          min:  { value: 50, message: "המחיר לא יכול להיות פחות מ-50" },
          max: { value: 500, message: "המחיר לא יכול להיות יותר מ-500" },
        })}
      />
      {errors.Price && <p className="alert" style={{backgroundColor:"red", color:"white"}}>{errors.Price.message}</p>}
      <br />
      <label className="form-label">תמונה</label>
      <input type="text" className="form-input" {...register("src")} />

      <input type="submit" className="form-submit" />
    </form>
  );
};

export default AddWine;

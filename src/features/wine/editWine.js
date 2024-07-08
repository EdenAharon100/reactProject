import { useForm } from 'react-hook-form';
import { updateWine } from './wineApi';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Button } from "semantic-ui-react"
import { toast } from 'react-toastify';
import "./editcss.css"

function EditWine() {
    let navigate = useNavigate();
    const location = useLocation();
    const { item } = location.state;
    const userToken = useSelector((state) => state.user.currentUser?.token);
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({ defaultValues: item });

    const onSubmit = async (data) => {
        if (isValid) {
            try {
                const newObj = {};
                for (const key in data) {
                    if (key != "_id" && data[key] !== null && data[key] !== undefined && data[key] != "") {
                        newObj[key] = data[key];
                    }
                }
                let res = await updateWine(item._id, newObj, userToken);
                toast.success(' ! הנעל עודכנה בהצלחה ', {
                    position: 'top-center',
                    autoClose: 3000, // מספר המילישני שתוצג ההתראה
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } catch (err) {
                toast.error(' ! הפעולה נכשלה ', {
                    position: 'top-center',
                    autoClose: 2000, // מספר המילישני שתוצג ההתראה
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log(err)
                toast.error(err?.response?.data?.message, {
                    position: 'top-center',
                    autoClose: 3000, // מספר המילישני שתוצג ההתראה
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
        navigate("/WineList")
    }


    return (<>
        <Typography variant="h4"> עדכון מוצר</Typography>
        <div id='editWine' /* style={{ overflowY: "auto", height: "90vh", padding: "16px"}}*/>
            <form onSubmit={handleSubmit(onSubmit)}>

                <TextField label="שם" type="text" style={{marginBottom:"10px"}}
                    {...register("Name" , { value: true, message: "שדה חובה" })} />
                {errors.Name && <span className="error-message">{errors.Name.message}</span>}

                <TextField label=" מחיר" type='number' style={{marginBottom:"10px"}}
                    {...register("Price", { min: { value: 20, message: "מחיר נמוך מידי!" }, max: { value: 500, message: "מחיר גבוה מידי !" } })} />
                {errors.Price && <span className="error-message">{errors.Price.message}</span>}

                <TextField label="קישור לתמונה" type="text" style={{marginBottom:"10px"}}
                    {...register("src")} />
                {errors.src && <span className="error-message">{errors.src.message}</span>}

                <TextField label=" תיאור" style={{marginBottom:"10px"}}
                    {...register("Description")} />
                {errors.Description && <span className="error-message">{errors.Description.message}</span>}


                <TextField label=" אחוזי אלכוהול" type='number' style={{marginBottom:"10px"}}
                    {...register("alcohol")} />
                {errors.alcohol && <span className="error-message">{errors.alcohol.message}</span>}

                <TextField label="התאמה לארוחה" type="text"
                    {...register("MatchWithFood")} />
                {errors.MatchWithFood && <span className="error-message">{errors.MatchWithFood.message}</span>}




                <Button.Group>

                    <Button basic color='black' onClick={() => { navigate("/WineList") }} >
                        ביטול
                    </Button>

                    <Button.Or />
                    <Button type="submit" Colored color='gray' >
                        שמירה
                    </Button>



                </Button.Group>
            </form>
        </div></>
    );

}
export default EditWine;
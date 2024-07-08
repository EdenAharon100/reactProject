import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Paper, Typography } from '@mui/material';
import { addOrder } from './orderApi';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './orderFormStyle.css';

const OrderForm = () => {
  const basket = useSelector((state) => state.order.basket);
  const userToken = useSelector((state) => state.user.currentUser?.token);
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  // const minimalScama = basket.map(item=>({_id:item._id,Name:item.Name,Price:item.Price,amount:item.amount}))

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const save = (data) => {
    if (currentUser == null) {
      alert(' הכנס או הרשם לאתר קודם');
      navigate('SignUp')
    } else {
      const ordersProducts = {
        address: data.address, // Take the address from the form
        products: basket, // Take the basket from the Redux state
        dueDate:data.dueDate
      };

      addOrder(ordersProducts, userToken)
        .then((res) => {
          alert('הצליח להוסיף הזמנה');
          console.log(res);
          navigate('/');
        })
        .catch((err) => {
          alert('לא הצליח להוסיף הזמנה' + err.response.data.message);
          console.log(err);
        });
    }
  };

  // const totalQuantity = basket.reduce((total, item) => total + item.quantity, 0);
  // const totalAmount = basket.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <form onSubmit={handleSubmit(save)} className='orderForm'>
      <Paper elevation={3} className="form-container">
        <Typography variant="h5" className="form-title">
          טופס הזמנה
        </Typography>


        <TextField
          label="כתובת"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('address', { required: { value: true, message: 'שדה חובה' } })}
          className="address-input"
        />
        <TextField
          type='date'
          label="תאריך יעד"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('dueDate', { required: { value: true, message: 'שדה חובה' } })}
          className="address-input"
        />
        {errors.addres && <span className="error-message">{errors.addres.message}</span>}

        {/* <Typography className="summary-text">סה"כ כמות מוצרים בסל: {totalQuantity}</Typography>
        <Typography className="summary-text">סה"כ לתשלום: {totalAmount}</Typography> */}

        <Button type="submit" variant="contained" className="continue-button">
          אישור הזמנה
        </Button>
      </Paper>
    </form>
  );
};

export default OrderForm;
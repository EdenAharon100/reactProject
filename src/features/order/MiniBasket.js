// import React from 'react';
// import { useSelector } from 'react-redux';
// import './MiniBasket.css';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


// const MiniBasket = () => {
//   const basket = useSelector((state) => state.order.basket);

//   return (
//     <>
//     <div className="tab"><ShoppingCartIcon style={{ fontSize: 30 }} /></div>
//       <div className="mini-basket-container">
//         <h2>Mini Basket</h2>
//         <div className="mini-basket">
//             {basket.map((item) => (
//             <div key={item._id}>
//                 <h3>{item.Name}</h3>
//                 <h4>{item.Price}</h4>
//             </div>
//             ))}
//         </div>
//     </div>
//     </>
//   );
// };

// export default MiniBasket;
// MiniBasket.js

import React from 'react';
import { useSelector } from 'react-redux';
import './MiniBasket.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MiniBasket = () => {
  const basket = useSelector((state) => state.order.basket);

  return (
    <>
      <div className="tab">
        <ShoppingCartIcon style={{ fontSize: 30 }} />
      </div>
      <div className="mini-basket-container">
        <h2>Mini Basket</h2>
        <div className="basket-content">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img src={item.src} alt={item.Name} />
                    <h3>{item.Name}</h3>
                  </td>
                  <td>
                    <h4>{item.Price}</h4>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MiniBasket;

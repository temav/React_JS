import React from 'react';
import './Order.css';

const Order = ({ name, price, data }) => (
  <div className="order">
    <p>Продукт: {name}</p>
    <p>Цена: {price}</p>
    <p>Дата: {data}</p>
  </div>
);

export default Order;

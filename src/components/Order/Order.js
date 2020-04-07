import React from 'react';
import './Order.css';

const Order = ({ name, price, date }) => (
  <div className="order">
    <p>Продукт: {name}</p>
    <p>Цена: {price}</p>
    <p>Дата: {date}</p>
  </div>
);

export default Order;

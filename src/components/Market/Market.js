import React, { Component } from 'react';
import {createOrder, moveOrderToFarm} from '../../actions/marketActions';
import './Market.css';
import Order from '../Order';
import { connect } from 'react-redux';

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька',
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date(),
  };
};

const mapStateToProps = ({market}) => ({
  market
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm,
};


export class Market extends Component {
  // handleCreate = () => {
  //   this.props.createOrder(getNewOrder());
  // }
  render() {
    const {market, createOrder, moveOrderToFarm} = this.props;
    return <div className="market">
      <div className="new-orders__create-form">
      <button onClick={()=>createOrder(getNewOrder())}>Make order</button>
      <button onClick={()=>moveOrderToFarm(market.orders[0])}>To Farm</button>
      </div>
      <div className="order-list">
      {market.orders.map((item, index) => <Order key={index} 
      id={item.id}
      name={item.name}
      price={item.price}
      // data={item.createdAt }
      >
      </Order>)}
      </div>
    </div>;
  }
}
//<p key={i}>{item}</p>
export default connect(mapStateToProps, mapDispatchToProps)(Market);

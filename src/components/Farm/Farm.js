import React, { Component } from 'react';
// import {createOrder, moveOrderToFarm} from '../../actions/marketActions';
import {moveOrderToCustomer} from '../../actions/farmActions';
import './Farm.css';
import Order from '../Order';
import { connect } from 'react-redux';

const mapStateToProps = ({farm}) => ({
  farm
});

const mapDispatchToProps = {
  // createOrder,
  // moveOrderToFarm,
  moveOrderToCustomer
};

export class Farm extends Component {
  render() {
    const {farm, moveOrderToCustomer} = this.props;
    return <div className="farm">
      <h2>Ферма</h2>
      <button disabled={farm.orders.length === 0}
      onClick={() => moveOrderToCustomer(farm.orders[0])}>To customer</button>
      <div className="order-list">
      {farm.orders.map((item, index) => <Order key={index} 
      id={item.id}
      name={item.name}
      price={item.price}
      date={`${item.createdAt}`}
      >
      </Order>)}
      </div>
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Farm);

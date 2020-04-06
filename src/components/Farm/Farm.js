import React, { Component } from 'react';
import {createOrder, moveOrderToFarm} from '../../actions/marketActions';
import './Farm.css';
import Order from '../Order';
import { connect } from 'react-redux';

const mapStateToProps = ({farm}) => ({
  farm
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm,
};

export class Farm extends Component {
  render() {
    const {farm} = this.props;
    return <div className="farm">
      {farm.orders.map((item, index) => <Order key={index} 
      id={item.id}
      name={item.name}
      price={item.price}
      // data={item.createdAt }
      >
      </Order>)}
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Farm);

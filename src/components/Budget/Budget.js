import React from 'react';
import './Budget.css';
import { connect } from 'react-redux'; 

const mapStateToProps = ({budget}) => ({
    budget
});

//   const mapDispatchToProps = {
//     createOrder,
//     moveOrderToFarm,
//   };

export const Budget = (props) => {
    const {deliveryExpanse, profit, farmExpanse} = props.budget;
    return (<div className="budget">
        <h2>Бюджет</h2>
        <p>Profit: {profit}</p>
        <p>Delivery Expanse: {deliveryExpanse}</p>
        <p>Farm Expanse: {farmExpanse}</p>
    </div>);
}

export default connect(mapStateToProps, )(Budget);
// export default Budget;

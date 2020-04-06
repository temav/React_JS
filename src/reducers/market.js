// import {createOrder, moveOrderToFarm} from '../actions/marketActions';
// console.log(createOrder());

import {CREATE_ORDER, MOVE_ORDER_TO_FARM} from '../actions/marketTypes';

const initMarketState = {
    orders: [],
}

export default (state = initMarketState, action) => {
    switch(action.type) {
        case CREATE_ORDER: {
            return Object.assign({}, state, {
                orders: [...state.orders, action.payload]
              });    
        }
        case MOVE_ORDER_TO_FARM: {
            return Object.assign({}, state, {orders: [...state.orders.filter((item) => 
                item['id'] !== action.payload.id)]});
        }
        default: return state;
    }
}
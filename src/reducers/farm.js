import {MOVE_ORDER_TO_CUSTOMER} from '../actions/farmTypes';
import {MOVE_ORDER_TO_FARM} from '../actions/marketTypes';

const initFarmState = {
    orders: []
}

export default (state = initFarmState, action) => {
    switch(action.type) {
        case MOVE_ORDER_TO_FARM: {
            return Object.assign({}, state, {
                orders: [...state.orders, action.payload]
              }); 
        }
        case MOVE_ORDER_TO_CUSTOMER: {
            return Object.assign({}, state, {orders: [...state.orders.filter((item) => 
                item['id'] !== action.payload.id)]});
        }
        default: return state;
    }
}
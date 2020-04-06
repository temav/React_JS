import {MOVE_ORDER_TO_CUSTOMER} from '../actions/farmTypes';
import {MOVE_ORDER_TO_FARM} from '../actions/marketTypes';

const initFarmState = {
    orders: []
}

export default (state = initFarmState, action) => {
    switch(action.type) {
        case MOVE_ORDER_TO_FARM: {
            state.orders.push(action.payload);
            return state;
        }
        case MOVE_ORDER_TO_CUSTOMER: {
            state.orders = state.orders.filter((item) => item['id'] !== action.payload.id)
            return state;
        }
        default: return state;
    }
}
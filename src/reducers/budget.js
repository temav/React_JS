import {MOVE_ORDER_TO_CUSTOMER} from '../actions/farmTypes';
import {CREATE_ORDER, MOVE_ORDER_TO_FARM} from '../actions/marketTypes';
const initBudgetState = {
    deliveryExpanse: 0,
    profit: 0,
    farmExpanse: 0
};
export default (state = initBudgetState, action) => {
    switch(action.type) {
        case CREATE_ORDER: {
            state.profit += action.payload.price;
            return state;
        }
        case MOVE_ORDER_TO_CUSTOMER: {
            state.deliveryExpanse += 20;
            return state;
        }
        case MOVE_ORDER_TO_FARM: {
            state.farmExpanse += 100;
            return state;
        }
        default: return state;
    }
};
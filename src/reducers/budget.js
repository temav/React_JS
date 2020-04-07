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
            return Object.assign({}, state, 
                {profit: state.profit + action.payload.price});
        }
        case MOVE_ORDER_TO_CUSTOMER: {
            return Object.assign({}, state, 
                {deliveryExpanse: state.deliveryExpanse + 20});
        }
        case MOVE_ORDER_TO_FARM: {
            return Object.assign({}, state, 
                {farmExpanse: state.farmExpanse + 100});
        }
        default: return state;
    }
};
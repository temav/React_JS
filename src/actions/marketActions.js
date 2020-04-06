import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';

export const createOrder = (payload_) => ({
    payload: payload_,
    type: CREATE_ORDER  
});

export const moveOrderToFarm = (payload_) => ({
    payload: payload_,
    type: MOVE_ORDER_TO_FARM  
});

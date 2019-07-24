import { UPDATE_PRODUCT } from '../actions/products-actions';

const INITIAL_STATE = '';

const productsReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch(type){
        case UPDATE_PRODUCT:
            return payload.products;
        default:
            return state;
    }
};

export default productsReducer;
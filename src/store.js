import userReducer from './reducers/user-reducer';
import productsReducer from './reducers/products-reducer';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    user: userReducer,
    products: productsReducer
});

const enhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore (
    reducers,
    {
        products: {name: 'iPhone'},
        user: 'Farhad'
    },
    enhancers
);

export default store;
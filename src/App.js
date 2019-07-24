import React from 'react';
import logo from './logo.svg';
import './App.css';
import { updateUser, apiRequest } from './actions/user-actions';
import { updateProduct } from './actions/products-actions';
import  MyInputForm  from './form.component';
import { connect } from 'react-redux';


class App extends React.Component{
  constructor(props){
    super(props);


//    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  /*
  * to demonstrate redux-thunk
  componentDidMount(){
    setTimeout(()=> {
      this.props.onApiRequest();
    }, 1500);
    
  }
  */
/*
  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }

*/




  render(){
/*
    console.log(this.props);
*/    
/*
    console.log('state: ');
    console.log(store.getState());
*/
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>{this.props.randomProp}</div>
          <div>{this.props.user}</div>
          <MyInputForm randomProp='Input Form'/>
        </header>
      </div>
    );    
  }

  componentDidMount(){
/*
    const productAction = {
      type: 'ChangeProduct',
      payload: {
        products: {name: 'Samsung Galaxy', price: 20}
      }
    }
*/

//    store.dispatch(updateProduct('samsung galaxy',20));
//    store.dispatch(updateUser('Fakhrul Islam Farhad'));

/*
    setTimeout(
      () => console.log(store.getState().user),
      2000
    );
*/
/*
    setTimeout(
      () => this.props.myLocalUpdateUser('Fakhrul Islam Farhad'), 2000
    );
*/
    setTimeout(
      () => this.props.myLocalUpdateProduct('Samsung Galaxy', 30), 1500
    );

    setTimeout(
      () => this.props.onApiRequest(), 3000
    );
      
  }
}

/*
const mapStateToProps = (stateTree,props) => {
  return {
    allProducts: stateTree.products,
    aUser: stateTree.user,
    userPlusProp: `${stateTree.user} ${props.aRandomProp}`
  }
}
*/

/*
const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
}

*/
/*
const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators( {
    onUpdateUser: updateUser
  }, dispatch);
}
*/

/*
const mapDispatchToProps = dispatch => {
  return {
    onUpdateUser: e=>dispatch(updateUser(e))
  }
}
*/

/*
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState, propsFromDispatch, ownProps);

  return {};
}

*/
//export default connect(mapStateToProps /*, mapActionsToProps*/)(App);
//export default connect(mapStateToProps , mapDispatchToProps)(App);



//export default connect(mapStateToProps)(App);

/*
const mapUserDispatchToProps = dispatch =>({
  myLocalUpdateUser: aUser => dispatch(updateUser(aUser))
});
*/

/*
const mapProductDispatchToProps = (dispatch, props) =>({
  myLocalUpdateProduct: (newProduct, newPrice) => 
    dispatch(updateProduct(props.aRandomProp, newPrice)),
})
*/

const mapProductDispatchToPropsThunk = {
  myLocalUpdateProduct: updateProduct,
  onApiRequest: apiRequest
}


//export default connect(null, mapUserDispatchToProps)(App);
//export default connect(null, mapProductDispatchToProps)(App);
export default connect(null, mapProductDispatchToPropsThunk)(App);
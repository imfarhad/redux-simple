import React from 'react';
import { connect } from 'react-redux';

export class MyInputForm extends React.Component{
    constructor(props){
        super(props);
    }

    onClick = () => {
        let textVal = document.getElementById('name').value;
        console.log(textVal);
        document.getElementById('name').value='';
    
    }

    render(){
        return (
            <div>
                <input type='text' name='name' id='name'/>
                <input type='button' onClick={this.onClick} value='SUBMIT'/>
                <p>{this.props.myuser} : {this.props.mypro.name}</p>
                <p>Props recived: {this.props.sentProp}</p>
          </div>
        )    
    }
}

const mapStateToProps = (state, props) => ({
    mypro: state.products,
    myuser: state.user,
    sentProp: props.randomProp
})


export default connect(mapStateToProps)(MyInputForm);
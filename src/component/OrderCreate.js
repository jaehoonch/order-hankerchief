import React from 'react';
import { connect } from 'react-redux';
import { createSalesOrder } from '../actions';
import OrderForm from './OrderForm';

class OrderCreate extends React.Component{



    
    render(){
        return (
            <div>
                Order Create
            </div>
        );
    }
}

export default OrderCreate;
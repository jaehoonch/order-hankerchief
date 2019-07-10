import React from 'react';
import { connect } from 'react-redux';
import { createSalesOrder, getSalesOrder } from '../actions';
import OrderForm from './OrderForm';

class OrderCreate extends React.Component{

    // componentDidMount(){
    //      this.props.getSalesOrder();
    // }

    onSubmit = (formValues, isDisabled) => {
        console.log(`Form Values : ${formValues}`);
        this.props.createSalesOrder(formValues, isDisabled);
    };

    render(){
        return (
            <div>
                {/* <div class="fd-spinner" aria-hidden="false" aria-label="Loading">
                    <div></div>
                </div> */}
                <OrderForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createSalesOrder, getSalesOrder })(OrderCreate);
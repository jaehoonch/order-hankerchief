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
                <div class="fd-alert fd-alert--warning fd-alert--dismissible fd-has-margin-tiny" role="alert" id="fwYq4606">
                여러분의 선원에 힘입어 오늘 주문은 마감되었습니다.
                </div>
                {/* <div class="fd-spinner" aria-hidden="false" aria-label="Loading">
                    <div></div>
                </div> */}
                <OrderForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createSalesOrder, getSalesOrder })(OrderCreate);
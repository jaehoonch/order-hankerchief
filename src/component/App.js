import React from 'react';
import { connect } from 'react-redux';
import { getSalesOrder, createSalesOrder } from '../actions'
import OrderForm from './OrderForm';

class App extends React.Component {

  //
  componentDidMount(){
    this.props.getSalesOrder();
    this.props.createSalesOrder();
  }

  renderList(){
    console.log(`Sales Orders : ${this.props.salesorders}`)
    if(this.props.salesorders === undefined){
      console.log("No Sales Order yet");
    }
    else{
      return this.props.salesorders.map(salersorder => {
        console.log(salersorder);
        return (
          <li className="fd-list-group__item">
            {salersorder.SalesOrder}
          </li>
          // <div key={salersorder.SalesOrder}>
          //   {salersorder.SalesOrder}
          // </div>
        );
      })
    }

  }
  
  render(){
    return (
      <div>
        <div className="fd-shell fd-shell--fundamentals">
          <div className="fd-shell__header">
            <div className="fd-shellbar">
            <a href="#" className="fd-shellbar__logo">
            <img src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png" srcset="//unpkg.com/fiori-fundamentals/dist/images/sap-logo@2x.png 1x, //unpkg.com/fiori-fundamentals/dist/images/sap-logo@3x.png 2x, //unpkg.com/fiori-fundamentals/dist/images/sap-logo@4x.png 3x" width="48" height="24" alt="SAP"/>
            </a>
            <strong>
              Corporate Portal
            </strong>
            
          </div>
          </div>
          <div className="fd-shell__app">
              <div className="fd-app">
                  <main className="fd-app__main">
                    <div className="fd-has-margin-tiny">
                      <OrderForm />
                    </div>
                  </main>
              </div>
          </div>
          <div className="fd-shell__footer">
          <div align="right">
                    <button className="fd-button--emphasized" align="right">제출</button>
                </div>
          </div>
      </div>
        


        
        {/* <ul className="fd-list-group">
          {this.renderList()}
        </ul> */}

      </div>

    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    salesorders: state.salesorders.results
      // salesorders: Object.values(state.salesorders)
  };
};


export default connect(mapStateToProps, { getSalesOrder, createSalesOrder })(App);
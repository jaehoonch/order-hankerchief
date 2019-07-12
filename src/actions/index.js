import s4odata from '../api/s4odata';
import {
    CREATE_SALESORDER,
    GET_SALESORDERS
} from './types';

import {
    pendingTask, // The action key for modifying loading state
    begin, // The action value if a "long" running task begun
    endAll // The action value if all running tasks must end
  } from 'react-redux-spinner';

import history from '../history';
import {toastr} from 'react-redux-toastr'
var XMLParser = require('react-xml-parser');

// Create Sales Order Action
export const createSalesOrder = (formValues, isDisabled) => async dispatch => {

    console.log("Create Sales Order");
    console.log(formValues);

    console.log(isDisabled.set)

    

    dispatch({
        type: 'ANY_OF_YOUR_ACTION_TYPES_FINISH',
        [ pendingTask ]: begin // Make sure you embrace `pendingTask` in brackets [] to evaluate it
        // Any additional key/values may be included here
      });

    //   document.getElementById("submitButton").setAttribute("disabled","disabled");
    document.getElementById("submitButton").disabled = true;

    const response = await s4odata.post("https://handkerchiefsalesorder.cfapps.jp10.hana.ondemand.com/postSalesOrder", formValues,
        {
            headers: {"Content-Type": "application/json"}
        }
    ).then((res) => {

        dispatch({
            type: 'ANY_OF_YOUR_ACTION_TYPES_FINISH',
            [ pendingTask ]: endAll // Bracket [] embrace, remember?
            // Any additional key/values may be included here
          });
        // console.log(res);

        
        var xml = new XMLParser().parseFromString(res.data.soPostResult);
        // console.log(xml.children[1].value);


        // console.log(xml.getElementsByTagName('Name'));

        if(res.data.resultStatus === 200 || res.data.resultStatus === 201){
            console.log("Successful");
            // console.log(formValues.PurchaseOrderByCustomer);

            history.push('/submitted');
        }else if (res.data.resultStatus === 400) {

            document.getElementById("submitButton").disabled = false;
            if(xml.children[1].value){
                toastr.error(xml.children[1].value);
            }else{
                toastr.error('주문 오류', '주문 접수가 되지 않았습니다.');
            }
            console.log("Error");
        }else{
            
            document.getElementById("submitButton").disabled = false;
            toastr.error('주문 오류', '주문 접수가 되지 않았습니다.');
            console.log("Unknown Error");
        }
        
        dispatch({ type: CREATE_SALESORDER, payload: res.data });
    })

};
export const getSalesOrder = () => async dispatch => {

    console.log("Get Sales Orders");
    const response = await s4odata.get(`/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder?$format=json&$top=1`, {
        headers: {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods" : "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }, 
        withCredentials: true
    });
    // const response = await s4odata.get('https://cors-anywhere.herokuapp.com/http://services.odata.org/V4/TripPinService/People');

    console.log(response);

    dispatch({ type: GET_SALESORDERS, payload: response.data });
};
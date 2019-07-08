import s4odata from '../api/s4odata';
import {
    CREATE_SALESORDER,
    GET_SALESORDERS
} from './types';
import { Cookies } from 'react-cookie';

// export const createSalesOrder = () => async dispatch => {

//     const response = await $http({
//         method: 'GET',
//         url: 'https://cors-anywhere.herokuapp.com/https://my300183-api.s4hana.ondemand.com/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder',
//         headers: { 
//          'x-csrf-token': 'Fetch',
//          'Authorization': 'Basic <<base64 encoded username:pass>>'
//         }
//       }).then(function(response){
//        $scope.token = response.headers('x-csrf-token');
//       });

//     dispatch({ type: CREATE_SALESORDER, payload: response.data });
// };


export const createSalesOrder = () => async dispatch => {

    console.log("Get Sales Orders");
    // var csrfCookie = Cookies.get('XSRF-TOKEN');
    // console.log(csrfCookie)
    const response = await s4odata.get(`/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder?$format=json&$top=1`, {
        headers: {
            "X-CSRF-Token":"Fetch"
        }
    }).then((response) => {
         console.log(response.headers['x-csrf-token']);

        const response2 = s4odata.post('/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder', {
        headers: {
            'Content-Type': 'application/json',
            'sap-language': 'EN',
            'X-Requested-With': 'XMLHttpRequest'
            // 'X-CSRF-Token': response.headers['x-csrf-token']
        },
        body : {
            "SalesOrderType": "OR",
            "SalesOrganization": "1710",
            "DistributionChannel": "10",
            "OrganizationDivision": "00",
            "SoldToParty": "17100001",
            "to_Item": {
                "results": [
                    {
                        "SalesOrderItem": "10",
                        "Material": "TG13",
                        "RequestedQuantity": "1"
                    }
                ]
            }
            
        }
    });


    });
    // const response = await s4odata.get('https://cors-anywhere.herokuapp.com/http://services.odata.org/V4/TripPinService/People');

    

    dispatch({ type: CREATE_SALESORDER, payload: response.data });
};

// export const createSalesOrder = () => async dispatch => {
//     s4odata.defaults.xsrfCookieName = 'csrftoken';
//     s4odata.defaults.xsrfHeaderName = 'X-CSRFToken';

//     const response = await s4odata.post('/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder', {
//         headers: {
//             'Content-Type': 'application/json',
//             'sap-language': 'EN'
//         },
//         body : {
//             "SalesOrderType": "OR",
//             "SalesOrganization": "1710",
//             "DistributionChannel": "10",
//             "OrganizationDivision": "00",
//             "SoldToParty": "17100001",
//             "to_Item": {
//                 "results": [
//                     {
//                         "SalesOrderItem": "10",
//                         "Material": "TG13",
//                         "RequestedQuantity": "1"
//                     }
//                 ]
//             }
            
//         }
//     });

//     dispatch({ type: CREATE_SALESORDER, payload: response.data });
// };


export const getSalesOrder = () => async dispatch => {

    console.log("Get Sales Orders");
    const response = await s4odata.get(`/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder?$format=json&$top=10`);
    // const response = await s4odata.get('https://cors-anywhere.herokuapp.com/http://services.odata.org/V4/TripPinService/People');

    console.log(response);

    dispatch({ type: GET_SALESORDERS, payload: response.data });
};
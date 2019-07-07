import s4odata from '../api/s4odata';
import {
    CREATE_SALESORDER,
    GET_SALESORDERS,
    GET_SALESORDER
} from './types';

export const createSalesOrder = () => async dispatch => {
    const response = await s4odata.post('/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder', {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-TOKEN': 'B_zfS10N8ER1Gzv3A5Efpw==',
            'Content-Type': 'application/json',
            'sap-language': 'EN'
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

    dispatch({ type: CREATE_SALESORDER, payload: response.data });
}

export const getSalesOrder = () => async dispatch => {

    console.log("Get Sales Orders");
    const response = await s4odata.get(`/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder?$format=json&$top=10`);
    // const response = await s4odata.get('https://cors-anywhere.herokuapp.com/http://services.odata.org/V4/TripPinService/People');

    console.log(response);

    dispatch({ type: GET_SALESORDERS, payload: response.data });
}
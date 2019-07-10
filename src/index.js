import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import ReduxToastr from 'react-redux-toastr'

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import 'redux-notifications/lib/styles.css';

import App from './component/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <App />
            <ReduxToastr
                timeOut={6000}
                newestOnTop={false}
                preventDuplicates
                position="top-center"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick/>
        </I18nextProvider>
    </Provider>,
    document.querySelector('#root')
);

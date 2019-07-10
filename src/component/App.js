import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import {
  Spinner
} from 'react-redux-spinner';

import OrderCreate from './OrderCreate';
import OrderSubmitted from './OrderSubmitted';
import history from '../history';

import { withNamespaces } from 'react-i18next';

import './App.css';
import image from '../images/Powered_By_SAPCP.png';

const App = ({ t }) => {
  return (
    <div>
      
      <Router history={history}>
        <div>
        <div className="fd-shell fd-shell--fundamentals">
        <div className="fd-shell__header">
          <div className="fd-shellbar">
            <a href="#" className="fd-shellbar__logo">
              <img src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png" srcSet="//unpkg.com/fiori-fundamentals/dist/images/sap-logo@2x.png 1x, //unpkg.com/fiori-fundamentals/dist/images/sap-logo@3x.png 2x, //unpkg.com/fiori-fundamentals/dist/images/sap-logo@4x.png 3x" width="48" height="24" alt="SAP"/>
            </a>

            <h3>
            <strong>
              {t('title')}
            </strong>
            </h3>

            <h3>
            <strong>
            </strong>
            </h3>

          </div>         
        </div>
        <div className="fd-shell__app fd-has-background-color-background-2">
            <div className="fd-app">
                <main className="fd-app__main">
                  <div className="fd-has-margin-tiny ">
                  <Spinner />
                  <Switch>
                    <Route path="/" exact component={OrderCreate} />
                    <Route path="/submitted" exact component={OrderSubmitted} />
                  </Switch>
                  </div>
                  <div align="center">
                    <img src={image} width="35%" align="center"></img>
                  </div>
                </main>
            </div>
        </div>
        <div className="fd-shell__footer">
      </div>
    </div>
  

        </div>
      </Router>
    </div>

  );
}

export default withNamespaces()(App);
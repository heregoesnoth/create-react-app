import React from 'react';
import ReactDOM from 'react-dom';
import "react-app-polyfill/jsdom";
import 'react-app-polyfill/stable';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Keycloak from 'keycloak-js'
import App from './App';

const keycloak = Keycloak();

keycloak.init({ onLoad: 'login-required'}).success((auth) => {

  if (!auth) {
    window.location.reload();
  } else {
    console.info("Authenticated");
  }

  ReactDOM.render(<App />, document.getElementById("root"));

  setTimeout(() => {
    keycloak.updateToken(70).success((refreshed) => {
      if (refreshed) {
        console.debug('Token refreshed' + refreshed);
      } else {
        console.warn('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).error(() => {
      console.error('Failed to refresh token');
    });


  }, 60000)

}).error(() => {
  console.error("Authenticated Failed");
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

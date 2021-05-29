import React from 'react';
import './index.css';
import {configureStore} from "./store";
import {Provider} from "react-redux";
import { render } from 'react-dom';
import InitialRouter from "./App";
import {BrowserRouter} from "react-router-dom";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

async function main() {
    const store = configureStore();
    render(
        <Provider store={store}>
            <BrowserRouter>
                <InitialRouter/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    )
}

window.onload = function () {
    main().catch(console.error);
}

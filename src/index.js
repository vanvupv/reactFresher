// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals'; 
 
// // // import { Provider } from 'react-redux';
// // // import store from './store'; 
// // // import { createStore } from 'redux';
// // // import rootReducer from './store/reducers/rootReducer';
// // // import TodoList from './TodoList';
 
// // // const reduxStore = createStore(rootReducer); 
  
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render( 
// //   <React.StrictMode> 
// //     <App /> 
// //     {/* <Provider store={store}>   
// //       <TodoList />
// //     </Provider>  */}
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
// ); 
 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
 
ReactDOM.render(  
<React.StrictMode>
  <App />
</React.StrictMode>,
document.getElementById('root')
);   
 
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
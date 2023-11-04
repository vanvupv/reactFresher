// import React from "react";
// import './App.scss';  

// import Nav from "./Navigation/Nav";
// import TodoList from "./TodoList/TodoList";   
// import Users from "./User/Users"; 
// import Table from "./Table/Table";

// import { Provider } from 'react-redux';
// import store from './TodoList/store';  
// import { createStore } from 'redux';


// // This site has 3 pages, all of which are rendered
// // dynamically in the browser (not server rendered).
// //
// // Although the page does not ever refresh, notice how
// // React Router keeps the URL up to date as you navigate
// // through the site. This preserves the browser history,
// // making sure things like the back button and bookmarks
// // work properly.


 
// export default function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <Nav /> 
//         <hr />
//         <Table /> 
 
//         {/*
//           A <Switch> looks through all its children <Route>
//           elements and renders the first one whose path
//           matches the current URL. Use a <Switch> any time
//           you have multiple routes, but you want only one
//           of them to render at a time
//         */}
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/todos">
//               <Provider store={store}>   
//                 <TodoList />
//             </Provider> 
//           </Route>
//           <Route path="/users"> 
//             <Users />  
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }
 
// // You can think of these components as "pages"
// // in your app.
 
// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }



import Container from 'react-bootstrap/esm/Container';
import './App.scss'; 
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Home  from './components/Home';
 
function App() {



  return (
    <>
    <div className='app-container'>

      <Router>
      <div>
        <Header /> 
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */} 
        <Container>
        <Switch>
          <Route path="/users">
            <TableUsers /> 
          </Route>
          <Route path="/login"> 
            <Login />
          </Route>
          <Route path="/"> 
            <Home />
          </Route>
        </Switch>
        </Container> 
      </div>
    </Router>


    </div>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
 
    </>
    
  )
}

export default App; 
import React from 'react'
import './sass/main.scss'
import Topbar from './components/layouts/Topbar'
import Sidebar from './components/layouts/Sidebar'
import Home from './components/pages/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import UserList from './components/pages/UserList'
import User from './components/pages/User'
import CreateUser from './components/pages/CreateUser'
import ProductList from './components/pages/ProductList'


function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/createUser">
            <CreateUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <User />
          </Route>
          <Route path="/newProduct">
            <CreateUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

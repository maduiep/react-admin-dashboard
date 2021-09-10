import React from 'react'
import './sass/main.scss'
import Topbar from './components/layouts/Topbar'
import Sidebar from './components/layouts/Sidebar'
import Home from './components/pages/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import UserList from './components/pages/UserList'


function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

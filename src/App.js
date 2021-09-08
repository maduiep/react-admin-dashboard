import React from 'react'
import './sass/main.scss'
import Topbar from './components/layouts/Topbar'
import Sidebar from './components/layouts/Sidebar'
import Home from './components/pages/Home'

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>

    </div>
  );
}

export default App;

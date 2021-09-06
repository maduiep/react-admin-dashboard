import React from 'react'
import './sass/main.scss'
import Topbar from './components/layouts/Topbar'
import Sidebar from './components/layouts/Sidebar'

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar/>
        <div className="others">others</div>
      </div>

    </div>
  );
}

export default App;

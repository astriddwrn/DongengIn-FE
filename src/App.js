import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import BerandaPage from './pages/Beranda'
import PreviewDongengPage from './pages/PreviewDongeng'

import './styles/main.css'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <BerandaPage />
          </Route>
          <Route exact path="/malin-kundang">
            <PreviewDongengPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

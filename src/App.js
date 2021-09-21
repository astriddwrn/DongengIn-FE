import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import BerandaPage from './pages/Beranda'

import './styles/main.css'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <BerandaPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

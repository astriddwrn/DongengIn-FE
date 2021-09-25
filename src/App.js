import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Beranda from './pages/Beranda'
import KumpulanDongeng from './pages/KumpulanDongeng'

import './styles/main.css'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Beranda currRoute="Beranda" />
          </Route>
          <Route path="/kumpulan-dongeng">
            <KumpulanDongeng currRoute="KumpulanDongeng" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

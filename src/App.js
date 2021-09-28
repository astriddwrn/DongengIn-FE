import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import BerandaPage from './pages/Beranda'
import PreviewDongengPage from './pages/PreviewDongeng'
import Beranda from './pages/Beranda'
import KumpulanDongeng from './pages/KumpulanDongeng'
import Daftar from './pages/Daftar'
import Masuk from './pages/Masuk'
import BacaCerita from './pages/BacaCerita'

import './styles/main.css'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Beranda currRoute="Beranda" />
          </Route>
          <Route exact path="/daftar">
            <Daftar/>
          </Route>
          <Route exact path="/masuk">
            <Masuk/>
          </Route>
          <Route path="/kumpulan-dongeng">
            <KumpulanDongeng currRoute="KumpulanDongeng" />
          </Route>
          <Route exact path="/malin-kundang">
            <PreviewDongengPage />
          </Route>
          <Route path="/baca-malin-kundang">
            <BacaCerita />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PreviewDongengPage from './pages/PreviewDongeng'
import Beranda from './pages/Beranda'
import KumpulanDongeng from './pages/KumpulanDongeng'
import Daftar from './pages/Daftar'
import Masuk from './pages/Masuk'
import BacaCerita from './pages/BacaCerita'
import Profile from './pages/Profil'

import './styles/main.css'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Beranda currRoute="Beranda" />
          </Route>
          <Route path="/daftar">
            <Daftar/>
          </Route>
          <Route path="/masuk">
            <Masuk/>
          </Route>
          <Route path="/kumpulan-dongeng">
            <KumpulanDongeng currRoute="KumpulanDongeng" />
          </Route>
          <Route path="/malin-kundang">
            <PreviewDongengPage />
          </Route>
          <Route path="/story/malin_kundang">
            <BacaCerita />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

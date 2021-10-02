import React, { useState, useEffect } from 'react'
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

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stories, setStories] = useState([]);
  

  useEffect(() => {
    fetch("https://dongengin.000webhostapp.com/api/stories")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setStories(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }, [])

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Beranda currRoute="Beranda" />
          </Route>
          <Route path="/daftar">
            <Daftar currRoute="Daftar" />
          </Route>
          <Route path="/masuk">
            <Masuk/>
          </Route>
          <Route path="/kumpulan-dongeng">
            <KumpulanDongeng currRoute="KumpulanDongeng" />
          </Route>
          <Route path="/story/:route"
            render={({match}) => (
              <PreviewDongengPage 
              story={stories.find(p => p.route == '/story/'+match.params.route)} 
                />
            )} />
          <Route path="/baca-malin-kundang">
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

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PreviewDongengPage from './pages/PreviewDongeng'
import Beranda from './pages/Beranda'
import KumpulanDongeng from './pages/KumpulanDongeng'
import Daftar from './pages/Daftar'
import Masuk from './pages/Masuk'
import BacaCerita from './pages/BacaCerita'
import Profile from './pages/Profil'
import KoleksiKartu from './pages/KoleksiKartu'

import './styles/main.css'

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stories, setStories] = useState([]);
  const [user, setUser] = useState({code:401});
  const [search, setSearch] = useState(null);
 
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

  useEffect(() => {
    fetch("https://dongengin.000webhostapp.com/api/user")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUser(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }, [])

    const updateSearch = (v) => {
      console.log(v);
      return setSearch(v);
    }

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Beranda 
              currRoute="Beranda" 
              user={user} 
              updateSearch={updateSearch} />
          </Route>
          <Route path="/daftar">
            <Daftar 
              currRoute="Daftar" 
              user={user} />
          </Route>
          <Route exact path="/masuk" >
            <Masuk 
              user={user} />
          </Route>
          <Route path="/kumpulan-dongeng">
            <KumpulanDongeng 
              currRoute="KumpulanDongeng" 
              user={user} 
              search={search}  
              updateSearch={updateSearch}/>
          </Route>
          <Route path="/story/:route"
            render={({match}) => (
              <PreviewDongengPage 
              story={stories.find(p => p.route == '/story/'+match.params.route)} 
              user={user}
                />
            )} />
          <Route path="/baca-malin-kundang">
            <BacaCerita 
              user={user} />
          </Route>
          <Route path="/profil">
            <Profile 
              user={user} />
          </Route>
          <Route path="/koleksi-kartu">
            <KoleksiKartu 
              user={user} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

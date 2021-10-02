import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

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
  
  window.setUser = setUser;

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
    console.log("userlopggnsas");
    fetch("https://dongengin.000webhostapp.com/api/user", {
      credentials: 'include',
    })
    .then(res => res.json())  
    .then(
      (result) => {
        setIsLoaded(true);
        setUser(result);
        console.log(result);
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
            <Beranda currRoute="Beranda" user={user} />
          </Route>
          <Route path="/daftar">
            <Daftar currRoute="Daftar" user={user} />
          </Route>
          <Route path="/masuk" >
            {user.code === 200 ? console.log("masukpakeko") : <Masuk user={user} />}
          </Route>
          <Route path="/kumpulan-dongeng">
            <KumpulanDongeng currRoute="KumpulanDongeng" user={user}  />
          </Route>
          <Route path="/story/:route"
            render={({match}) => (
              <PreviewDongengPage 
              story={stories.find(p => p.route == '/story/'+match.params.route)} 
              user={user}
                />
            )} />
          <Route path="/baca-malin-kundang">
            <BacaCerita user={user} />
          </Route>
          <Route path="/profil">
            <Profile user={user} />
          </Route>
          <Route path="/koleksi-kartu">
            <KoleksiKartu user={user} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

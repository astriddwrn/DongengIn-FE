import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/common/logo.svg';

const Header = (props) => {

  let listener = null
  const [scrollState, setScrollState] = useState("top");
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [user, setUser] = useState({code:401});

  useEffect(() => {
    let isSubscribed = true
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120 && isSubscribed ) {
        if (scrollState !== "amir") {
          setScrollState("amir")
        }
      } else {
        if (scrollState !== "top" && isSubscribed) {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener);
      isSubscribed = false
    }
  }, [scrollState])

  

    return (
      <>    
        <div className={(scrollState=="top" ? '' : 'bg-cWhite filter drop-shadow-lg') + " navbar font-sans flex flex-row justify-between items-center px-20 py-5 fixed top-0 w-full"}>
            <div className="logo"><img className="h-5" src={Logo} alt="" /></div>
            <div className="menu-list flex flex-row justify-between w-5/12 items-center font-semibold text-lg">
                <Link to="/"><div className={`cursor-pointer ${props.currRoute==='Beranda'? 'active' : ''}`}>Beranda</div></Link>
                <Link to="/kumpulan-dongeng"><div className={`cursor-pointer ${props.currRoute==='KumpulanDongeng'? 'active' : ''}`}>Kumpulan Dongeng</div></Link>
                
                {(props.user.fullname)?
                  <a href="/profil"><div className="bg-cPink text-cWhite rounded-full px-5 py-1 font-bold cursor-pointer">Profil</div></a>
                :
                  <><Link to="/daftar"><div className={`cursor-pointer ${props.currRoute==='Daftar'? 'active' : ''}`}>Daftar</div></Link><Link to="/masuk">
                    <div className="bg-cPink text-cWhite rounded-full px-5 py-1 font-bold cursor-pointer btnPink">Masuk</div></Link></>
                }
            </div>
        </div>
      </>
    );
};

export default Header;
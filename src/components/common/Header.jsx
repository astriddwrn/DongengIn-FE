import React, { useState, useEffect } from 'react';

import Logo from '../../assets/images/common/logo.svg';

const Header = (props) => {

  let listener = null
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (scrollState !== "amir") {
          setScrollState("amir")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

    return (
      <>    
        <div className={(scrollState=="top" ? '' : 'bg-cWhite') + " navbar font-sans flex flex-row justify-between items-center px-20 py-5 fixed top-0 w-full"}>
            <div className="logo"><img className="h-5" src={Logo} alt="" /></div>
            <div className="menu-list flex flex-row justify-between w-5/12 items-center font-semibold text-lg">
                <a href="/"><div className={`cursor-pointer ${props.currRoute=='Beranda'? 'active' : ''}`}>Beranda</div></a>
                <a href="kumpulan-dongeng"><div className={`cursor-pointer ${props.currRoute=='KumpulanDongeng'? 'active' : ''}`}>Kumpulan Dongeng</div></a>
                <a href="daftar"><div className={`cursor-pointer ${props.currRoute=='Daftar'? 'active' : ''}`}>Daftar</div></a>
                <a href="masuk"><div className="bg-cPink text-cWhite rounded-full px-5 py-1 font-bold cursor-pointer">Masuk</div></a>
            </div>
        </div>
      </>
    );
};

export default Header;
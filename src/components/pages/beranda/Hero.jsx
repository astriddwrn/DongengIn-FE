import React, {useEffect, useState, useLayoutEffect} from 'react';
import { Link } from 'react-router-dom';

import Grass from '../../../assets/images/pages/beranda/hero-grass.svg';
import Castle from '../../../assets/images/pages/beranda/hero-castle.svg';
import Mountain1 from '../../../assets/images/pages/beranda/hero-mountain1.svg';
import Mountain2 from '../../../assets/images/pages/beranda/hero-mountain2.svg';
import SearchIcon from '../../../assets/images/pages/beranda/hero-searchicon.svg';



const Hero = (props) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  const searchHandle = () => {
    props.updateSearch(document.getElementById('search').value);
  }

    return (
      <>
      <img className=" -bottom-96 absolute w-full z-30" src={Grass} alt="" />
        <div className="hero container w-full relative overflow-hidden">
          <img className="absolute w-96 z-20 -bottom-40" src={Castle} alt="" 
            style={{transform: `translate(${offsetY*0.05}px,${offsetY*0.7}px)`}}/>
          
          <img className="-bottom-60 absolute w-full z-10" src={Mountain1} alt="" 
            style={{transform: `translate(-${offsetY*0.2}px,${offsetY*0.3}px)`}}/>
          <img className="-bottom-64 absolute w-full z-0" src={Mountain2} alt="" 
            style={{transform: `translateY(${offsetY*0.6}px)`}}/>

          <div className="text-cont top-52 absolute right-36 z-50 w-4/12"
            style={{transform: `translateY(-${offsetY*0.15}px)`}}
            >
            <div className="text-5xl font-extrabold tracking-widest leading-relaxed">JELAJAHI DUNIA</div>
            <div className="text-2xl tracking-widest w-11/12 leading-9 my-2">Jelajahi cerita dongeng yang akan membawamu kedalam dunia khayalan</div>
            <div className="search-cont relative">
              <input className="bg-cWhite text-cBlack rounded-full  py-3 px-5 w-full mt-5 tracking-widest outline-none pr-16" id="search" type="text" placeholder="Mau baca apa hari ini?" />
              <Link to="/kumpulan-dongeng" onClick={()=> searchHandle()}><img className="absolute right-4 top-7 w-8 cursor-pointer " src={SearchIcon} alt="" /></Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default Hero;
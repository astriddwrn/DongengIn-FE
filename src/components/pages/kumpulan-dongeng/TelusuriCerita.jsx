import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SearchIcon from '../../../assets/images/pages/beranda/hero-searchicon.svg';
import Star from '../../../assets/images/common/star.svg';
import grayStar from '../../../assets/images/common/graystar.svg';

const TelusuriCerita = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [category, setCategory] = useState([
    'Minangkabau', 'Legenda', 'Jawa', 'Betawi', 'Jawa Tengah', 'Jawa Barat', 'Fabel', 'Hikayat', 'Jagoan',
  ]);
  const [cerita, setCerita] = useState([]);
  const [search, setSearch] = useState(props.search);

  useEffect(() => {
    fetch(search?"https://dongengin.000webhostapp.com/api/stories?search="+search
    :"https://dongengin.000webhostapp.com/api/stories")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCerita(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [search])

  const imagePath = process.env.PUBLIC_URL;

  const settings = {
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 7,
    arrows : false,
    initialSlide: 5
  };

  const searchHandle = () => {
    setSearch(document.getElementById('search').value);
    props.updateSearch(document.getElementById('search').value);
  }

  const searchCateg = (v) => {
    setSearch(v);
    props.updateSearch(v);
  }

    return (
      <>    
        <div className="telusuri mt-60 w-10/12 mx-auto relative z-40">
            <div className="text-4xl font-extrabold tracking-widest leading-relaxed mb-5">TELUSURI CERITA</div>
            <div className="search-cont relative rounded-full" >
              <input className="search bg-cWhite text-cBlack rounded-full  py-3 px-5 w-full mt-5 tracking-widest outline-none pr-16" id="search" type="text" placeholder="Mau baca apa hari ini?" />
              <button onClick={() => searchHandle()}><img className="absolute right-4 top-7 w-8 cursor-pointer " src={SearchIcon} alt="" /></button>
            </div>

            <div className="slider-cont relative">
              <Slider className="mt-10 px-10" {...settings}>
                {category.map((d, index ) =>
                  <div key={index} className="list-category cursor-pointer rounded-full py-1 w-40 text-center text-cBlue bg-cWhite tracking-widest leading-relaxed btnCateg"
                  onClick={()=>searchCateg(d)}>{d}</div>
                )}
                
              </Slider>
              <div className="categoryleft absolute w-24 h-10 top-0 -left-2"></div>
              <div className="categoryright absolute w-24 h-10 top-0 -right-2"></div>
            </div>

            <div className="cerita-cont flex flex-wrap justify-center">
            {cerita.map(d =>          
              <div key={d.id} className="w-80 h-96 bg-cBlack rounded-lg overflow-hidden relative m-5">
                      <img className="object-cover object-center h-full w-full" src={`${imagePath}${d.thumbnail}`} alt="" />
                      <div className="title absolute bottom-24 tracking-widest leading-relaxed font-semibold text-cWhite text-2xl left-3">{d.title}</div>
                      <div className="text-content">
                          
                          <div className="subtext-cont absolute bottom-5 flex flex-row items-center justify-between w-full px-3">
                              <div>
                                  <div className="category tracking-widest leading-relaxed mb-2">{d.categories[0]}</div>
                                  <div className="rating flex flex-row">
                                      <img className={""+((d.rating >= 1) ? '' : 'hidden')} src={Star} alt="" />
                                      <img className={""+((d.rating >= 2) ? '' : 'hidden')} src={Star} alt="" />
                                      <img className={""+((d.rating >= 3) ? '' : 'hidden')} src={Star} alt="" />
                                      <img className={""+((d.rating >= 4) ? '' : 'hidden')} src={Star} alt="" />
                                      <img className={""+((d.rating >= 5) ? '' : 'hidden')} src={Star} alt="" />

                                      <img className={"w-4 opacity-50 "+((d.rating <= 5) ? '' : 'hidden')} src={grayStar} alt="" />
                                      <img className={"w-4 opacity-50  "+((d.rating <= 4) ? '' : 'hidden')} src={grayStar} alt="" />
                                      <img className={"w-4 opacity-50  "+((d.rating <= 3) ? '' : 'hidden')} src={grayStar} alt="" />
                                      <img className={"w-4 opacity-50  "+((d.rating <= 2) ? '' : 'hidden')} src={grayStar} alt="" />
                                      <img className={"w-4 opacity-50  "+((d.rating <= 1) ? '' : 'hidden')} src={grayStar} alt="" />
                                  </div>
                              </div>
                              <Link to={d.route}>
                                  <div className="baca-button bg-cPink text-cWhite rounded-full px-5 py-1 font-semibold tracking-widest leading-relaxed btnPink">
                                      Lihat
                                  </div>
                              </Link>
                          </div>
                      </div>
                  </div>
              )}
            </div>
          
            
          </div>
      </>
    );
};

export default TelusuriCerita
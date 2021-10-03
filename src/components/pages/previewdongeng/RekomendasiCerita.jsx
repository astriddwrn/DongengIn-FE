import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Star from '../../../assets/images/common/star.svg';

const RekomendasiCerita = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const imagePath = process.env.PUBLIC_URL;
    
    useEffect(() => {
      let isSubscribed = true;
      if(isSubscribed) {
        fetch("https://dongengin.000webhostapp.com/api/stories/recomendation")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setData(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }
      return () => {
        isSubscribed = false
      }
      }, [])

    const settings = {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        arrows : false,
      };

    return (
      <>
        <div className="terfavorit mt-48 w-10/12 my-0 mx-auto">
            <div>
                <div className="text-4xl font-extrabold tracking-widest leading-relaxed mb-5">REKOMENDASI CERITA</div>
                <Slider className="h-96 mb-40" {...settings}>
                {data.map(d =>     
                    
                <div key={d.id} className="w-60 h-96 bg-cBlack rounded-lg overflow-hidden relative outline-none">
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
                                    </div>
                                </div>
                                <Link to={d.route}>
                                    <div className="baca-button bg-cPink text-cWhite rounded-full px-5 py-1 font-semibold tracking-widest leading-relaxed btnPink">
                                        Baca Buku
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                )}
                </Slider>
            </div>
        </div>
      </>
    );
};

export default RekomendasiCerita;
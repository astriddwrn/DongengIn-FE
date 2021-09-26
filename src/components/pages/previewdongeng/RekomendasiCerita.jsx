import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Malin from '../../../assets/images/pages/beranda/terfavorit-malin.svg';
import Star from '../../../assets/images/common/star.svg';


const RekomendasiCerita = () => {

    const [data, setData] = useState([
        {
            id: 1,
            title: "Malin",
            category: "Minangkabau",
            rating: 4,
            image: "terfavorit-malin",
            link: "https://launching.bncc.net/",
        },
        {
            id: 2,
            title: "Kundang",
            category: "Minangkabau",
            rating: 4,
            image:"terfavorit-malin",
            link: "https://launching.bncc.net/",
        },
        {
            id: 3,
            title: "Malin Kundang",
            category: "Minangkabau",
            rating: 4,
            image: "terfavorit-malin",
            link: "https://launching.bncc.net/",
        },
        {
            id: 4,
            title: "Malin Kundang",
            category: "Minangkabau",
            rating: 4,
            image: "terfavorit-malin",
            link: "https://launching.bncc.net/",
        },
        {
            id: 4,
            title: "Malin Kundang",
            category: "Minangkabau",
            rating: 4,
            image: "terfavorit-malin",
            link: "https://launching.bncc.net/",
        },
    ]);


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
                    
                <div className="w-60 h-96 bg-cBlack rounded-lg overflow-hidden relative">
                        <img className="object-cover object-center h-full w-full" src={require(`../../../assets/images/pages/beranda/${d.image}.svg`).default} alt="" />
                        <div className="title absolute bottom-24 tracking-widest leading-relaxed font-semibold text-cWhite text-2xl left-3">{d.title}</div>
                        <div className="text-content">
                            
                            <div className="subtext-cont absolute bottom-5 flex flex-row items-center justify-between w-full px-3">
                                <div>
                                    <div className="category tracking-widest leading-relaxed mb-4">{d.category}</div>
                                    <div className="rating flex flex-row">
                                        <img className={""+((d.rating >= 1) ? '' : 'hidden')} src={Star} alt="" />
                                        <img className={""+((d.rating >= 2) ? '' : 'hidden')} src={Star} alt="" />
                                        <img className={""+((d.rating >= 3) ? '' : 'hidden')} src={Star} alt="" />
                                        <img className={""+((d.rating >= 4) ? '' : 'hidden')} src={Star} alt="" />
                                        <img className={""+((d.rating >= 5) ? '' : 'hidden')} src={Star} alt="" />
                                    </div>
                                </div>
                                <a href={d.link}>
                                    <div className="baca-button bg-cPink text-cWhite rounded-full px-5 py-1 font-semibold tracking-widest leading-relaxed">
                                        Baca Buku
                                    </div>
                                </a>
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
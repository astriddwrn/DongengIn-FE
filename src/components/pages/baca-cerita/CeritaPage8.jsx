import React, { useState, useEffect } from 'react';

import Background from '../../../assets/images/pages/baca-cerita/cerita-background-malin8.svg';
import ArrowLeft from '../../../assets/images/pages/baca-cerita/cerita-left-arrow.svg';
import ArrowRight from '../../../assets/images/pages/baca-cerita/cerita-right-arrow.svg';

const CeritaPage8 = (props) => {
    
    const [caption, setCaption] = useState([
        "Mande Rubayah tidak percaya akan perilaku anaknya, ia jatuh terduduk sambil berkata, “Malin, Malin, anakku. Aku ini ibumu, Nak! Mengapa kau jadi seperti ini Nak?!”",
        "Malin Kundang tidak memperdulikan perkataan ibunya. Dia tidak akan mengakui ibunya. la malu kepada istrinya. Melihat perempuan itu bersujud hendak memeluk kakinya, Malin menendangnya sambil berkata, “Hai, perempuan gila! lbuku tidak seperti engkau! Melarat dan kotor!”",
        "Perempuan tua itu terkapar di pasir, menangis, dan sakit hati. Orang-orang yang meilhatnya ikut terpana dan kemudian pulang ke rumah masing-masing. Mande Rubayah pingsan dan terbaring sendiri. Ketika ia sadar, Pantai Air Manis sudah sepi.",
        "Dilihatnya kapal Malin semakin menjauh. Ia tak menyangka Malin yang dulu disayangi tega berbuat demikian. Hatinya perih dan sakit, lalu tangannya diangkat ke langit. Ia kemudian berdoa dengan hatinya yang pilu,",
        "“Ya, Tuhan, kalau memang dia bukan anakku, aku maafkan perbuatannya tadi. Tapi kalau memang dia benar anakku yang bernama Malin Kundang, aku mohon keadilanmu, Ya Tuhan!” ucapnya pilu sambil menangis.",
        "Tak lama kemudian cuaca di tengah laut yang tadinya cerah, mendadak berubah menjadi gelap. Hujan tiba-tiba turun dengan teramat lebatnya."
    ]);
    const [currCaption, setCurrCaption] = useState(0);
    const maxCaption = 5;
    const minCaption = 0;
    const [captionVisible, setCaptionVisible] = useState(true);

    const nextBtn = () => {
        setCaptionVisible(false);
        setTimeout(function(){ setCurrCaption(currCaption+1); }, 200);
        setTimeout(function(){ setCaptionVisible(true) }, 200);
    }
    const prevBtn = () => {
        setCaptionVisible(false);
        setTimeout(function(){ setCurrCaption(currCaption-1); }, 200);
        setTimeout(function(){ setCaptionVisible(true) }, 200);
    }


    return (
        <div id="ceritaPage" className={`ceritaPage w-screen h-screen  absolute bottom-0 ${props.pagenum===8? "fadeIn z-20" : "fadeOut z-10"}`}>
          <img className="object-cover position-center w-screen h-screen" src={Background} alt="" />
          <div className="absolute bottom-10 w-full px-10 flex flex-row justify-between">
            <img className="arrow-left w-20 cursor-pointer" src={ArrowLeft} 
                onClick={currCaption===minCaption? props.prevPage : ()=>prevBtn()} />
            <img className="arrow-right w-20 cursor-pointer" src={ArrowRight} 
                onClick={currCaption===maxCaption? props.nextPage :()=>nextBtn()} />
          </div>
          <div id="caption" className={`caption-cont absolute bottom-10 text-lg w-8/12 left-1/2 transform -translate-x-1/2 bg-cWhite py-3 px-8 rounded-lg tracking-widest leading-relaxed  + ${captionVisible? "fadeIn" : "fadeOut"} `}>
              {caption[currCaption]}</div>
        </div>
    );

};
export default CeritaPage8;
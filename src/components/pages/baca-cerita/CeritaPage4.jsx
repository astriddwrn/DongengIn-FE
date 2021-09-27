import React, { useState, useEffect } from 'react';

import Background from '../../../assets/images/pages/baca-cerita/cerita-background-malin4.svg';
import ArrowLeft from '../../../assets/images/pages/baca-cerita/cerita-left-arrow.svg';
import ArrowRight from '../../../assets/images/pages/baca-cerita/cerita-right-arrow.svg';

const CeritaPage4 = (props) => {
    
    const [caption, setCaption] = useState([
        "Bertahun-tahun Mande Rubayah terus bertanya namun tak pernah ada jawaban hingga tubuhnya semakin tua, dan kini jalannya mulai terbungkuk-bungkuk. Pada suatu hari Mande Rubayah mendapat kabar dari nakhoda yang dahulu membawa Malin, nahkoda itu memberi kabar bahagia pada Mande Rubayah.",
        "“Mande, tahukah kau, anakmu kini telah menikah dengan gadis cantik, putri seorang bangsawan yang sangat kaya raya,” ucapnya saat itu.",
        "“Malin cepatlah pulang kemari Nak, ibu sudah tua Malin, kapan kau pulang…” rintihnya pilu setiap malam.",
        "Ia yakin anaknya pasti datang. Benar saja tak berapa lama kemudian di suatu hari yang cerah dari kejauhan tampak sebuah kapal yang megah nan indah berlayar menuju pantai.",
    ]);
    const [currCaption, setCurrCaption] = useState(0);
    const maxCaption = 3;
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
        <div id="ceritaPage" className={`ceritaPage w-screen h-screen  absolute bottom-0 ${props.pagenum===4? "fadeIn z-20" : "fadeOut z-10"}`}>
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
export default CeritaPage4;
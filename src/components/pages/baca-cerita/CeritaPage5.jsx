import React, { useState, useEffect } from 'react';

import Background from '../../../assets/images/pages/baca-cerita/cerita-background-malin5.svg';
import ArrowLeft from '../../../assets/images/pages/baca-cerita/cerita-left-arrow.svg';
import ArrowRight from '../../../assets/images/pages/baca-cerita/cerita-right-arrow.svg';

const CeritaPage5 = (props) => {
    
    const [caption, setCaption] = useState([
        "Penduduk desa mulai berkumpul, mereka mengira kapal itu milik seorang sultan atau seorang pangeran. Mereka menyambutnya dengan gembira. Mande Rubayah amat gembira mendengar hal itu, ia selalu berdoa agar anaknya selamat dan segera kembali menjenguknya, sinar keceriaan mulai mengampirinya kembali.",
        "Namun hingga berbulan-bulan semenjak ia menerima kabar Malin dari nahkoda itu, Malin tak kunjung kembali untuk menengoknya.",
        "Ketika kapal itu mulai merapat, terlihat sepasang anak muda berdiri di anjungan. Pakaian mereka berkilauan terkena sinar matahari. Wajah mereka cerah dihiasi senyum karena bahagia disambut dengan meriah.",
    ]);
    const [currCaption, setCurrCaption] = useState(0);
    const maxCaption = 2;
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
        <div id="ceritaPage" className={`ceritaPage w-screen h-screen  absolute bottom-0 ${props.pagenum===5? "fadeIn z-20" : "fadeOut z-10"}`}>
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
export default CeritaPage5;
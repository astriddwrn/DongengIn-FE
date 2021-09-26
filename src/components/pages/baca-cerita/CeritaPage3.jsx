import React, { useState, useEffect } from 'react';

import Background from '../../../assets/images/pages/baca-cerita/cerita-background-malin3.svg';
import ArrowLeft from '../../../assets/images/pages/baca-cerita/cerita-left-arrow.svg';
import ArrowRight from '../../../assets/images/pages/baca-cerita/cerita-right-arrow.svg';

const CeritaPage3 = (props) => {
    
    const [caption, setCaption] = useState([
        "Hari demi hari terus berlalu, hari yang terasa lambat bagi Mande Rubayah. Setiap pagi dan sore Mande Rubayah memandang ke laut.",
        "“Sudah sampai manakah kamu berlayar Nak?” tanyanya dalam hati sambil terus memandang laut.",
        "la selalu mendoakan agar anaknya selalu selamat dan cepat kembali. Beberapa waktu kemudian ketika ada kapal yang datang merapat ia selalu menanyakan kabar tentang anaknya.",
        "“Apakah kalian melihat anakku, Malin? Apakah dia baik-baik saja? Kapan ia pulang?” tanyanya.",
        "Namun setiap ia bertanya pada awak kapal atau nahkoda tidak pernah mendapatkan jawaban. Malin tak pernah menitipkan barang atau pesan apapun kepada ibunya"
    ]);
    const [currCaption, setCurrCaption] = useState(0);
    const maxCaption = 4;
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
        <div id="ceritaPage" className={`ceritaPage w-screen h-screen  absolute bottom-0 ${props.pagenum===3? "fadeIn z-20" : "fadeOut z-10"}`}>
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
export default CeritaPage3;
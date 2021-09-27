import React, { useState, useEffect } from 'react';

import Background from '../../../assets/images/pages/baca-cerita/cerita-background-malin1.svg';
import ArrowLeft from '../../../assets/images/pages/baca-cerita/cerita-left-arrow.svg';
import ArrowRight from '../../../assets/images/pages/baca-cerita/cerita-right-arrow.svg';

const CeritaPage1 = (props) => {
    
    const [caption, setCaption] = useState([
        "Zaman dahulu kala ada sebuah cerita di sebuah perkampungan nelayan Pantai Air Manis di Padang, Sumatera Barat. Ada seorang janda bernama Mande Rubayah yang hidup bersama anak laki-lakinya yang bernama Malin Kundang.",
        "Mande Rubayah sangat menyayangi dan memanjakan Malin Kundang. Malin kemudian tumbuh menjadi seorang anak yang rajin dan penurut.",
        "Ketika Mande Rubayah sudah tua, ia hanya mampu bekerja sebagai penjual kue untuk mencupi kebutuhan dirinya dan anak tunggalnya. Suatu hari, Malin jatuh sakit keras, hingga nyawanya hampir melayang namun akhirnya ia dapat diseiamatkan-berkat usaha keras ibunya.",
        "Setelah sembuh dari sakitnya ia semakin disayang. Mereka adalah ibu dan anak yang saling menyayangi.",
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

    const pageVisible = () => {
        document.getElementById("ceritaPage").classList.add("fadeIn");
        setTimeout(function() {document.getElementById("ceritaPage").classList.add("block"); }, 200);
    }
    const pageInvisible = () => {
        document.getElementById("ceritaPage").classList.add("fadeOut");
        setTimeout(function() {document.getElementById("ceritaPage").classList.add("hidden"); }, 200);
    }

    return (
        <div className={`ceritaPage w-screen h-screen absolute bottom-0 ${props.pagenum===1? "fadeIn z-20" : "fadeOut z-10"}`}>
          <img className="object-cover position-center w-screen h-screen" src={Background} alt="" />
          <div className="absolute bottom-10 w-full px-10 flex flex-row justify-between">
            <img className="arrow-left w-20 cursor-pointer" src={ArrowLeft} 
                onClick={currCaption===minCaption? null : ()=>prevBtn()} />
            <img className="arrow-right w-20 cursor-pointer" src={ArrowRight} 
                onClick={currCaption===maxCaption? props.nextPage :()=>nextBtn()} />
          </div>
          <div id="caption" className={`caption-cont absolute bottom-10 text-lg w-8/12 left-1/2 transform -translate-x-1/2 bg-cWhite py-3 px-8 rounded-lg tracking-widest leading-relaxed  + ${captionVisible? "fadeIn" : "fadeOut"} `}>
              {caption[currCaption]}</div>
        </div>
    );

};

export default CeritaPage1;
import React, { useState} from 'react';

import Background from '../../../assets/images/pages/baca-cerita/cerita-background-malin9.svg';
import ArrowLeft from '../../../assets/images/pages/baca-cerita/cerita-left-arrow.svg';
import ArrowRight from '../../../assets/images/pages/baca-cerita/cerita-right-arrow.svg';

const CeritaPage9 = (props) => {
    
    const [caption, setCaption] = useState([
        "Tiba-tiba datanglah badai besar, menghantam kapal Malin Kundang. Lalu sambaran petir yang menggelegar. Saat itu juga kapal hancur berkeping- keping. Kemudian terbawa ombak hingga ke pantai.",
        "Esoknya saat matahari pagi muncul di ufuk timur, badai telah reda. Di pinggir pantai terlihat kepingan kapal yang telah menjadi batu. Itulah kapal Malin Kundang! Tampak sebongkah batu yang menyerupai tubuh manusia.",
        "Itulah tubuh Malin Kundang anak durhaka yang dikutuk ibunya menjadi batu karena telah durhaka. Disela-sela batu itu berenang-renang ikan teri, ikan belanak, dan ikan tengiri. Konon, ikan itu berasal dari serpihan tubuh sang istri yang terus mencari Malin Kundang.",
        "Kisah Legenda Malin Kundang ini memiliki pesan yang dapat diambil si Kecil, yaitu sayangi kedua orangtua saat susah dan senang, dan jangan melupakan jasa orangtua yang telah menyayangi dan mendidik dari kecil.",
        "Itulah dongeng anak dari Sumatra Barat, kisah Malin Kundang, si Anak yang durhaka pada ibunya. Semoga bisa jadi pembelajaran ya untuk diceritakan ke anak-anak.",
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
        <div id="ceritaPage" className={`ceritaPage w-screen h-screen  absolute bottom-0 ${props.pagenum===9? "fadeIn z-20" : "fadeOut z-10"}`}>
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
export default CeritaPage9;
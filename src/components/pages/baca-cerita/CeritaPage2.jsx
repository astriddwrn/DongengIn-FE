import React, { useState, useEffect } from 'react';

import Background from '../../../assets/images/pages/baca-cerita/cerita-background-malin2.svg';
import ArrowLeft from '../../../assets/images/pages/baca-cerita/cerita-left-arrow.svg';
import ArrowRight from '../../../assets/images/pages/baca-cerita/cerita-right-arrow.svg';

const CeritaPage2 = (props) => {
    
    const [caption, setCaption] = useState([
        "Saat Malin sudah dewasa ia meminta izin kepada ibunya untuk pergi merantau ke kota, karena saat itu sedang ada kapal besar merapat di Pantai Air Manis.",
        "“Jangan Malin, ibu takut terjadi sesuatu denganmu di tanah rantau sana. Menetaplah saja di sini, temani ibu,” ucap ibunya yang sedih setelah mendengar keinginan Malin yang ingin merantau.",
        "“Ibu tenanglah, tidak akan terjadi apa-apa denganku,” ujar Malin sambil menggenggam tangan ibunya.",
        "“Ini kesempatan Bu, kerena belum tentu setahun sekali ada kapal besar merapat di pantai ini. Aku ingin mengubah nasib kita Bu, izinkanlah” pinta Malin memohon.",
        "“Baiklah, ibu izinkan. Cepatlah kembali, ibu akan selalu menunggumu Nak,” kata ibunya sambil menangis.",
        "Meski dengan berat hati akhirnya Mande Rubayah mengizinkan Malin untuk pergi. Kemudian Malin dibekali dengan nasi berbungkus daun pisang sebanyak tujuh bungkus,",
        "“Untuk bekalmu di perjalanan,” katanya sambil menyerahkannya pada Malin. Setelah itu Malin Kundang berangkat ke tanah rantau meninggalkan ibunya sendirian.",
        
      ]);
      const [currCaption, setCurrCaption] = useState(0);
      const maxCaption = 7;
      const minCaption = 0;
      const [captionVisible, setCaptionVisible] = useState(true);
      const [answer, setAnswer] = useState(null);
      const correctAnswer = 4;
  
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
          <div className={`ceritaPage w-screen h-screen absolute bottom-0 overflow-hidden ${props.pagenum===2? "fadeIn z-20" : "fadeOut z-10"}`}>
            <img className="object-cover position-center w-screen h-screen" src={Background} alt="" />
            <div className="absolute bottom-10 w-full px-10 flex flex-row justify-between">
              <img className="arrow-left w-20 cursor-pointer" src={ArrowLeft} 
                  onClick={(currCaption===minCaption)? null : ()=>prevBtn()} />
              <img className="arrow-right w-20 cursor-pointer" src={ArrowRight} 
                  onClick={ (!answer && currCaption === maxCaption)? null : (currCaption===maxCaption)? props.nextPage : ()=>nextBtn()} />
            </div>
              <div id="caption" className={`caption-cont absolute bottom-10 text-lg w-8/12 left-1/2 transform -translate-x-1/2 bg-cWhite py-3 px-8 rounded-lg tracking-widest leading-relaxed  + ${captionVisible? "fadeIn" : "fadeOut"} + ${currCaption===maxCaption? "hidden" : ""}`}>
                {caption[currCaption]}
              </div>
  
              <div className={`caption-cont absolute bottom-10 text-lg w-8/12 left-1/2 transform -translate-x-1/2 bg-cWhite py-3 px-8 rounded-lg tracking-widest leading-relaxed + ${currCaption==maxCaption? "fadeIn text-center" : "fadeOut"}`}>
                Apa yang Malin naiki ketika ia ingin pergi merantau? 
                <div className="flex flex-wrap 8/12 justify-center mt-3">

                      <div className={`answer bg-cBlue text-cWhite text-lg py-2 px-3 w-28 mx-3 rounded-lg  + 
                        ${answer===1? "incorrectAns" : ""} ${!answer? "btnBlue cursor-pointer" : ''}`}
                        onClick={()=> 
                          !answer? setAnswer(1) :  null 
                          }>Motor</div>

                      <div className={`answer bg-cBlue text-cWhite text-lg py-2 px-3 w-28 mx-3 rounded-lg  + 
                        ${answer===2? "incorrectAns" : ""} ${!answer? "btnBlue cursor-pointer" : ''}`}
                        onClick={()=> 
                            !answer? setAnswer(2) :  null 
                          }>Mobil</div>

                      <div className={`answer bg-cBlue text-cWhite text-lg py-2 px-3 w-28 mx-3 rounded-lg  + 
                        ${answer===3? "incorrectAns" : ""} ${!answer? "btnBlue cursor-pointer" : ''}`}
                        onClick={()=> 
                          !answer? setAnswer(3) : null
                          }>Pesawat</div>

                      <div className={`answer bg-cBlue text-cWhite text-lg py-2 px-3 w-28 mx-3 rounded-lg  + 
                        ${answer? "correctAns" : ""} ${!answer? "btnBlue cursor-pointer" : ''}`}
                        onClick={()=> {
                            if(!answer){
                                  setAnswer(4);
                                  props.totalKoin(100);
                                }
                        }}>Kapal</div>
                        
                </div>
              </div>
     
              <div className={`feedback feedbackCorrect text-cWhite bg-cBlack absolute top-16 -right-96 z-40 rounded-lg z-30 w-96 px-3 py-3 text-lg ${answer==correctAnswer && currCaption==maxCaption ? 'visible' : ''} `}>Selamat kamu mendapatkan 100 Koin!</div>
              <div className={`feedback feedbackIncorrect text-cWhite bg-cBlack absolute top-16 -right-96 z-40 rounded-lg z-30 w-96 px-3 py-3 text-lg ${answer!=correctAnswer && answer!=null && currCaption==maxCaption? 'visible' : ''} `}>Maaf kamu belum beruntung :(</div>
  
          </div>
  
      );

};
export default CeritaPage2;
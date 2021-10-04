import React, { useState, useEffect } from 'react';

import Background from '../../../assets/images/pages/baca-cerita/cerita-background-malin6.svg';
import ArrowLeft from '../../../assets/images/pages/baca-cerita/cerita-left-arrow.svg';
import ArrowRight from '../../../assets/images/pages/baca-cerita/cerita-right-arrow.svg';

const CeritaPage6 = (props) => {
    
    const [caption, setCaption] = useState([
        "Mande Rubayah juga ikut berdesakan mendekati kapal. Jantungnya berdebar keras saat melihat lelaki muda yang berada di kapal itu, ia sangat yakin sekali bahwa lelaki muda itu adalah anaknya, Malin Kundang.",
        "Belum sempat para sesepuh kampung menyambut, Ibu Malin terlebih dahulu menghampiri Malin. la langsung memeluknya erat Malin karena takut kehilangan anaknya lagi.",
        "“Malin, anakku. Kau benar anakku kan?” katanya menahan isak tangis karena gembira, “Mengapa begitu lamanya kau tidak memberi kabar?”",
      ]);
      const [currCaption, setCurrCaption] = useState(0);
      const maxCaption = 3;
      const minCaption = 0;
      const [captionVisible, setCaptionVisible] = useState(true);
      const [answer, setAnswer] = useState(null);
      const correctAnswer = 1;
  
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
          <div className={`ceritaPage w-screen h-screen absolute bottom-0 overflow-hidden ${props.pagenum===6? "fadeIn z-20" : "fadeOut z-10"}`}>
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
                Apa yang dilakukan Mande Rubayah ketika bertemu dengan Malin?
                <div className="flex flex-wrap 8/12 justify-center mt-3">
                      <div className={`answer bg-cBlue text-cWhite text-lg py-2 px-3 w-48 mx-3 rounded-lg  + 
                        ${answer? "correctAns" : ""} ${!answer? "btnBlue cursor-pointer" : ''}`}
                        onClick={()=>{ if(!answer){
                          setAnswer(1);
                          props.totalKoin(60);
                        }}} >Memeluknya</div>

                      <div className={`answer bg-cBlue text-cWhite text-lg py-2 px-3 w-48 mx-3 rounded-lg  + 
                        ${answer===2? "incorrectAns" : ""} ${!answer? "btnBlue cursor-pointer" : ''}`}
                        onClick={()=> 
                          !answer? setAnswer(2) : null
                          }>Diam Saja</div>

                      <div className={`answer bg-cBlue text-cWhite text-lg py-2 px-3 w-48 mx-3 rounded-lg  + 
                        ${answer===3? "incorrectAns" : ""} ${!answer? "btnBlue cursor-pointer" : ''}`}
                        onClick={()=> 
                          !answer? setAnswer(3) : null
                          }>Memarahinya</div>

                      <div className={`answer bg-cBlue text-cWhite text-lg py-2 px-3 w-48 mx-3 rounded-lg  + 
                        ${answer===4? "incorrectAns" : ""} ${!answer? "btnBlue cursor-pointer" : ''}`}
                        onClick={()=> 
                          !answer? setAnswer(4) : null
                        }>Berjabat Tangan</div>
                </div>
              </div>
     
              <div className={`feedback feedbackCorrect text-cWhite bg-cBlack absolute top-16 -right-96 z-40 rounded-lg z-30 w-96 px-3 py-3 text-lg ${answer==correctAnswer && currCaption==maxCaption ? 'visible' : ''} `}>Selamat kamu mendapatkan 60 Koin!</div>
              <div className={`feedback feedbackIncorrect text-cWhite bg-cBlack absolute top-16 -right-96 z-40 rounded-lg z-30 w-96 px-3 py-3 text-lg ${answer!=correctAnswer && answer!=null && currCaption==maxCaption? 'visible' : ''} `}>Maaf kamu belum beruntung :(</div>
  
          </div>
  
      );

};
export default CeritaPage6;
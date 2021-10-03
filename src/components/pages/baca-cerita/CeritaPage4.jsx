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
      const maxCaption = 4;
      const minCaption = 0;
      const [captionVisible, setCaptionVisible] = useState(true);
      const [answer, setAnswer] = useState(null);
      const correctAnswer = 2;
  
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
          <div className={`ceritaPage w-screen h-screen absolute bottom-0 overflow-hidden ${props.pagenum===4? "fadeIn z-20" : "fadeOut z-10"}`}>
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
                Siapa yang memberitahu Mande Rubayah mengenai kabar Malin?
                <div className="flex flex-wrap 8/12 justify-center mt-3">
                      <div className={`answer bg-cBlue text-cWhite text-lg py-2 px-3 w-48 mx-3 rounded-lg  + 
                        ${answer===1? "incorrectAns" : ""} ${!answer? "btnBlue cursor-pointer" : ''}`}
                        onClick={()=> 
                            !answer? setAnswer(1) : null
                            }>Orang Asing</div>

                      <div className={`answer bg-cBlue text-cWhite text-lg py-2 px-3 w-48 mx-3 rounded-lg  + 
                        ${answer? "correctAns" : ""} ${!answer? "btnBlue cursor-pointer" : ''}`}
                        onClick={()=>{ if(!answer){
                            setAnswer(2);
                            props.totalKoin(100);
                          }}} >Nahkoda</div>

                      <div className={`answer bg-cBlue text-cWhite text-lg py-2 px-3 w-48 mx-3 rounded-lg  + 
                        ${answer===3? "incorrectAns" : ""} ${!answer? "btnBlue cursor-pointer" : ''}`}
                        onClick={()=> 
                          !answer? setAnswer(3) : null
                          }>Saudaranya</div>

                      <div className={`answer bg-cBlue text-cWhite text-lg py-2 px-3 w-48 mx-3 rounded-lg  + 
                        ${answer===4? "incorrectAns" : ""} ${!answer? "btnBlue cursor-pointer" : ''}`}
                        onClick={()=> 
                          !answer? setAnswer(4) : null
                        }>Gadis Cantik</div>
                </div>
              </div>
     
              <div className={`feedback feedbackCorrect text-cWhite bg-cBlack absolute top-16 -right-96 z-40 rounded-lg z-30 w-96 px-3 py-3 text-lg ${answer==correctAnswer && currCaption==maxCaption ? 'visible' : ''} `}>Selamat kamu mendapatkan 100 Koin!</div>
              <div className={`feedback feedbackIncorrect text-cWhite bg-cBlack absolute top-16 -right-96 z-40 rounded-lg z-30 w-96 px-3 py-3 text-lg ${answer!=correctAnswer && answer!=null && currCaption==maxCaption? 'visible' : ''} `}>Maaf kamu belum beruntung :(</div>
  
          </div>
  
      );

};
export default CeritaPage4;
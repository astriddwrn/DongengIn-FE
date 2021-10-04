import React, { useState, useEffect} from 'react';
import Close from '../../../assets/images/common/close.svg'
import Coin from '../../../assets/images/pages/dashboard/coin.svg'

const BeliModal = (props) => {

  const [modal, setModal] = useState(props.state);
  useEffect(() => {
    console.log(props.state);
    
  })

    return (
      <>
        <main
          className={
            (modal === 1 ?
              "bg-cWhite p-8 absolute left-1/2 z-20 top-1/2 transform -transalte-x-1/2 shadow-bsModal rounded-lg cursor-pointer"
              : "hidden")}>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full"><img className="float-right" src={Close} alt="" /></div>
              <div className="font-semibold text-2xl mt-4">Apakah kamu mau membeli kartu</div>
              <div className="font-extrabold text-4xl mr-4">{props.title}</div>
              <div className="flex flex-row items-center mt-2">
                <div className="font-extrabold text-4xl mr-2">{props.coin}</div>
                <img className="w-8" src={Coin} alt=""/>
              </div>
              <div className="mt-8">
                <button className="bg-cPink rounded-full font-extrabold text-cWhite py-2 px-12 text-2xl mr-4">Beli Kartu</button>
                <button className="bg-cPurple rounded-full font-extrabold text-cWhite py-2 px-12 text-2xl">Cancel</button>
              </div>
            </div>
        </main>
      </>
    );
};

export default BeliModal;
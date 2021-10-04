import React from 'react';
import Close from '../../../assets/images/common/close.svg'
import Coin from '../../../assets/images/pages/dashboard/coin.svg'

const BeliModal = (props) => {
    const useCoin = { 'type': 'use_coin', 'value': props.price };
    console.log(useCoin);
    const encode = (data) => {     
        var formBody = [];
        for (var property in data) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        return formBody;
    }

    const sendData = async () => {
        var BeliKartu = await fetch('https://dongengin.000webhostapp.com/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            credentials: 'include',
            body: encode(useCoin)
        })
        if (BeliKartu.status == 200) {
            console.log(BeliKartu);
            props.closeModal();
        }
    }

    const handleSubmit = () => {
        sendData();
    }

    return (
      <>
        <main
        className={
            (props.state === 1 ?
            "w-screen h-screen bg-cOverlay fixed z-20"
            : "hidden")}>
            <div className="w-max flex flex-col items-center justify-center bg-cWhite rounded-lg p-8 ml-96 mt-48">
            <div onClick={e => props.closeModal()} className="w-full"><img className="float-right" src={Close} alt="" /></div>
            <div className="font-semibold text-2xl mt-4">Apakah kamu mau membeli kartu</div>
            <div className="font-extrabold text-4xl mr-4 text-center">{props.title}</div>
            <div className="flex flex-row items-center mt-2">
                <div className="font-extrabold text-4xl mr-2">{props.price}</div>
                <img className="w-8" src={Coin} alt=""/>
            </div>
            <div className="mt-8">
                <button onClick={e => handleSubmit()} className="bg-cPink rounded-full font-extrabold text-cWhite py-2 px-12 text-2xl mr-4">Beli Kartu</button>
                <button onClick={e => props.closeModal()} className="bg-cPurple rounded-full font-extrabold text-cWhite py-2 px-12 text-2xl">Cancel</button>
            </div>
            </div>
        </main>
      </>
    );
};

export default BeliModal;
import React from 'react';
import Close from '../../../assets/images/common/close.svg'
import Coin from '../../../assets/images/pages/dashboard/coin.svg'

const BeliModal = (props) => {
    
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

    const sendCoin = async () => {
        let useCoin = { 'type': 'use_coin', 'value': props.price };
        let post = await fetch('https://dongengin.000webhostapp.com/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            credentials: 'include',
            body: encode(useCoin)
        })
        if (post.status == 200) {
            props.closeModal();
        }
    }

    console.log('props:'+props.cardid);
    const sendCard = async () => {
        let addCard = { 'type': 'add_card', 'value': props.cardid };
        let post = await fetch('https://dongengin.000webhostapp.com/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            credentials: 'include',
            body: encode(addCard)
        })
        if (post.status == 200) {
            props.updateKartu(props.cardid);
        }
    }

    const handleSubmit = () => {
        sendCoin();
        sendCard();
    }

    return (
      <>
        <main
        className={
            (props.state === 1 ?
            "w-screen h-screen bg-cOverlay fixed z-20"
            : "hidden")}>
            <div className="w-max flex flex-col items-center justify-center bg-cWhite rounded-lg p-8 ml-96 mt-48">
                <div onClick={e => props.closeModal()} className="w-full cursor-pointer"><img className="float-right" src={Close} alt="" /></div>
                <div className="font-semibold text-2xl mt-4">Apakah kamu mau membeli kartu</div>
                <div className="font-extrabold text-4xl mr-4 text-center mt-4">{props.title}</div>
                <div className="flex flex-row items-center mt-2">
                    <div className="font-extrabold text-4xl mr-2">{props.price}</div>
                    <img className="w-8" src={Coin} alt=""/>
                </div>
                <div className="mt-8">
                    <button onClick={e => handleSubmit()} className="bg-cPink rounded-full font-bold text-cWhite py-2 px-12 text-xl mr-4 btnPink cursor-pointer mx-5">Beli Kartu</button>
                    <button onClick={e => props.closeModal()} className="bg-cPurple rounded-full font-bold text-cWhite py-2 px-12 text-xl btnPurple cursor-pointer mx-5">Cancel</button>
                </div>
            </div>
        </main>
      </>
    );
};

export default BeliModal;
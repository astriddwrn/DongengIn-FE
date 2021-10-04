import React, { useState, useCallback } from 'react';
import {useHistory, Link} from 'react-router-dom';

import closeBtn from '../../../assets/images/pages/baca-cerita/popup-closeBtn.svg';
import graystar from '../../../assets/images/common/graystar.svg';
import bluestar from '../../../assets/images/common/bluestar.svg';

const Popup = (props) => {
    const history = useHistory();
    const redirect = useCallback(() => history.push('/'), [history]);
    const [rating, setRating] = useState(0);

    const data = { 'type' : 'set_rating', 'value' : rating };

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
        var postData = await fetch('https://dongengin.000webhostapp.com/api/story/5', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            credentials: 'include',
            body: encode(data)
        })
        if(postData.status===200){
            document.location.href="/";
        }
    }

    const handleSubmit = () => {
        sendData();
    }

    const handleOnClick = () => {
        props.closePopup();
        props.handleSubmit();
        handleSubmit();
        redirect();
    }

    return (
        <div className={`popup  ${props.popup? 'block' : 'hidden'} `}>
            <div className="modal fixed top-0 w-full h-screen bg-cBlack opacity-50 z-40"></div>
            <div className="container w-6/12 py-10 font-semibold text-2xl text-center rounded-lg tracking-widest leading-relaxed bg-cWhite absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={closeBtn} className="float-right mr-10 cursor-pointer" 
                    onClick={props.closePopup}/>
                <div className="mb-5  mt-14">Pada cerita ini kamu mendapatkan</div>
                <div className="text-4xl mb-10">{props.koin} Koin & Poin</div>
                <div className="mb-5">Mohon berikan penilaian kamu untuk cerita ini!</div>
                <div className="flex flex-row mx-auto w-96 justify-between mb-10">
                    <img src={`${rating>=1? bluestar : graystar} `} className={`filter `} onClick={()=>setRating(1)}/>
                    <img src={`${rating>=2? bluestar : graystar} `} className={``} onClick={()=>setRating(2)} />
                    <img src={`${rating>=3? bluestar : graystar} `} className={``} onClick={()=>setRating(3)} />
                    <img src={`${rating>=4? bluestar : graystar} `} className={``} onClick={()=>setRating(4)} />
                    <img src={`${rating>=5? bluestar : graystar} `} className={``} onClick={()=>setRating(5)} />
                </div>
                <div to className="submitBtn bg-cPink text-cWhite rounded-full px-5 py-1 font-bold cursor-pointer w-60 mx-auto cursor-pointer btnPink"
                    onClick={()=>handleOnClick()}>Selesai</div>
            </div>
        </div>
    );

};

export default Popup;
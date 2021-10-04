import React, { useState, useEffect } from 'react';

import HeaderBaca from '../components/pages/baca-cerita/HeaderBaca';
import CeritaPage1 from '../components/pages/baca-cerita/CeritaPage1';
import CeritaPage2 from '../components/pages/baca-cerita/CeritaPage2';
import CeritaPage3 from '../components/pages/baca-cerita/CeritaPage3';
import CeritaPage4 from '../components/pages/baca-cerita/CeritaPage4';
import CeritaPage5 from '../components/pages/baca-cerita/CeritaPage5';
import CeritaPage6 from '../components/pages/baca-cerita/CeritaPage6';
import CeritaPage7 from '../components/pages/baca-cerita/CeritaPage7';
import CeritaPage8 from '../components/pages/baca-cerita/CeritaPage8';
import CeritaPage9 from '../components/pages/baca-cerita/CeritaPage9';
import Popup from '../components/pages/baca-cerita/Popup';


const BacaCerita = (props) => {
    const [pagenum, setPagenum] = useState(1);
    const totalPage = 9;
    const minPage = 1;
    const maxPage = 9;
    const [koin, setKoin] = useState(0);
    const [popup, setPopup] = useState(false);

    const data = { 'type' : 'add_poin', 'value' : koin };

    const nextPage = () => {
        if (pagenum==9){
            setPopup(true);
            return;
        }
        return setPagenum(pagenum+1);
    }
    const prevPage = () => {
        if (pagenum==0){
            return;
        }
        return setPagenum(pagenum-1);
    }

    const totalKoin = (v) => {
        setKoin(koin + v);
        // console.log('koin:'+koin);
    }
    const closePopup = () => {
        return setPopup(false)
    }
    
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
        await fetch('https://dongengin.000webhostapp.com/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            credentials: 'include',
            body: encode(data)
        }) 
    }

    const handleSubmit = () => {
        sendData();
    }

    return (
        <React.Fragment>
            <HeaderBaca pagenum={pagenum} totalPage={totalPage} user={props.user} />
            <CeritaPage1 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage} totalKoin={totalKoin}  />
            <CeritaPage2 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  totalKoin={totalKoin}/>
            <CeritaPage3 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  totalKoin={totalKoin}/>
            <CeritaPage4 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  totalKoin={totalKoin}/>
            <CeritaPage5 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  totalKoin={totalKoin}/>
            <CeritaPage6 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  totalKoin={totalKoin}/>
            <CeritaPage7 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  totalKoin={totalKoin}/>
            <CeritaPage8 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  totalKoin={totalKoin}/>
            <CeritaPage9 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  totalKoin={totalKoin}/>
            <Popup koin={koin} popup={popup} closePopup={closePopup} handleSubmit={handleSubmit} />
        </React.Fragment>
    );

};

export default BacaCerita;
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import HeaderArrow from '../../../assets/images/pages/baca-cerita/header-arrow.svg';
import CaptionBtn from '../../../assets/images/pages/baca-cerita/header-caption-btn.svg';
import VoiceBtn from '../../../assets/images/pages/baca-cerita/header-voice-btn.svg';

const HeaderBaca = (props) => {
    const history = useHistory();

    return (
        <div className="headerBaca absolute w-screen z-50 top-0 text-lg flex flex-row justify-between items-center px-10 py-3 text-cWhite font-semibold tracking-widest leading-relaxed">
            <div className="flex flex-row">
                <button onClick={() => history.goBack()}><img src={HeaderArrow} alt="" /></button>
                <div className="ml-10">Malin Kundang</div>
            </div>
            <div>
                {props.pagenum}/{props.totalPage}
            </div>
            <div className="flex flex-row items-center">
                <div>{props.user.coins} Koin</div>
                <img className="mx-5 w-9" src={CaptionBtn} alt="" />
                <img className="w-9" src={VoiceBtn} alt="" />
            </div>
        </div>
    );

};

export default HeaderBaca;
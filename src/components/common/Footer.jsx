import React, { useState, useEffect } from 'react';

import Background from '../../assets/images/common/footer-bg.svg';
import LogoBlue from '../../assets/images/common/logo-blue.svg';
import Youtube from '../../assets/images/common/footer-youtube.svg';
import Instagram from '../../assets/images/common/footer-instagram.svg';
import Playstore from '../../assets/images/common/footer-playstore.svg';
import Appstore from '../../assets/images/common/footer-appstore.svg';


const Footer = () => {
    return(
        <div className="footer relative">
            <img className="w-full h-96 object-cover mt-40" src={Background} alt="" />
            <div className="absolute z-20 w-10/12 transform -translate-x-1/2  flex flex-row justify-between items-center bottom-28 left-1/2">
                <img className="h-6" src={LogoBlue} alt="" />
                <div className="flex flex-row items-center w-40 justify-between items-center">
                    <img className="w-8" src={Youtube} alt="" />
                    <img className="w-8" src={Instagram} alt="" />
                    <img className="w-8" src={Playstore} alt="" />
                    <img className="w-8" src={Appstore} alt="" />
                </div>
            </div>
            <div className="absolute w-full bottom-1 text-center">
                Dibuat dengan ❤️ oleh Tim GGEZ,<br/>
                Universitas Bina Nusantara
            </div>
        </div>
    );
}

export default Footer;
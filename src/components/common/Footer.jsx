import React, { useState, useEffect } from 'react';

import Background from '../../assets/images/common/footer-bg.png';
import LogoBlue from '../../assets/images/common/logo-blue.svg';
import Youtube from '../../assets/images/common/footer-youtube.svg';
import Instagram from '../../assets/images/common/footer-instagram.svg';
import Playstore from '../../assets/images/common/footer-playstore.svg';
import Appstore from '../../assets/images/common/footer-appstore.svg';


const Footer = () => {

    var style = {
        width: "100%",
        // height: "400px",
        backgroundImage: "url(" + { Background } + ")"
      };

    return(
        <div className="footer relative bottom">
            <img className="w-full h-80 object-top mt-40 " src={Background} alt="" />
            {/* <div className="w-full absolute w-full h-96 bottom-0 layer"></div> */}
            <div className="absolute z-30 w-10/12 transform -translate-x-1/2  flex flex-row justify-between items-center bottom-28 left-1/2">
                <img className="h-6" src={LogoBlue} alt="" />
                <div className="flex flex-row items-center w-40 justify-between items-center">
                    <a href="https://www.youtube.com/" target="_blank"><img className="w-8" src={Youtube} alt="" /></a>
                    <a href="https://www.instagram.com/" target="_blank"><img className="w-8" src={Instagram} alt="" /></a>
                    <a href="https://play.google.com/store" target="_blank"><img className="w-8" src={Playstore} alt="" /></a>
                    <a href="https://www.apple.com/id/app-store/" target="_blank"><img className="w-8" src={Appstore} alt="" /></a>
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
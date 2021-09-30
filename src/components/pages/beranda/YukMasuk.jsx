import React from 'react';
import { Link } from 'react-router-dom'

const YukMasuk = () => {

    return (
        <div className="yukmasuk bg-cLightBlue w-full py-20">
            <div className="tracking-widest leading-relaxed text-3xl font-semibold text-center">Ingin kami mencatat perjalanan membacamu?</div>
            <Link to=""><div className="bg-cPurple tracking-widest leading-relaxed rounded-full p-3 w-40 text-center text-cWhite mx-auto mt-10">Yuk Masuk!</div></Link>
        </div>
    );


}

export default YukMasuk;
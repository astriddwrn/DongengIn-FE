import React, { useState } from 'react';

import ButtonFavorit from './ButtonFavorit';
import Star from '../../../assets/images/common/bluestar.png';

const DeskripsiCerita = () => {

    const [data, setData] = useState([
        {
            title: "Malin Kundang",
            deskripsi: "Diceritakan bahwa Malin Kundang merupakan anak semata wayang yang tinggal bersama ibunya. Saat remaja, ia memutuskan untuk pergi merantau dengan menumpang kapal seorang saudagar. Di tengah perjalanan, kapal yang dinaiki Malin Kundang di serang oleh bajak laut.",
            category: "Minangkabau",
            rating: 4,
            isFavorit: 0,
            image: "terfavorit-malin",
        }
    ]);
    
    /* console.log(data[0].isFavorit); */
    return (
        <div className="deskripsi mt-48 w-10/12 my-0 mx-auto">
            <div className="content flex flex-row justify-center">
                <div className="w-1/3 ml-16">
                    <img className="object-cover h-full w-full" src={require(`../../../assets/images/pages/beranda/${data[0].image}.svg`).default} alt="" />
                </div>
                <div className="w-2/3 px-16">
                    <div className="text-4xl font-extrabold tracking-widest leading-relaxed mb-8">{data[0].title}</div>
                    <div className="text-2xl font-normal leading-10">{data[0].deskripsi}</div>
                    <div className="tags-container flex flex-row flex-wrap">
                        <div className="tags mt-8">
                            {data[0].category}
                        </div>
                    </div>
                    <div className="ratings flex flex-row my-8">
                        <img className={""+((data[0].rating >= 1) ? '' : 'hidden')} src={Star} alt="" />
                        <img className={""+((data[0].rating >= 2) ? '' : 'hidden')} src={Star} alt="" />
                        <img className={""+((data[0].rating >= 3) ? '' : 'hidden')} src={Star} alt="" />
                        <img className={""+((data[0].rating >= 4) ? '' : 'hidden')} src={Star} alt="" />
                        <img className={""+((data[0].rating >= 5) ? '' : 'hidden')} src={Star} alt="" />
                    </div>
                    <a href="baca-malin-kundang" className="mb-5 font-extrabold text-2xl tracking-wider text-cWhite bg-cPink rounded-full mr-8 py-3 px-8 w-52 text-center">Baca Buku</a>
                    <ButtonFavorit isFavorit={data[0].isFavorit}/>
                </div>
            </div>
        </div>
    );
};

export default DeskripsiCerita;
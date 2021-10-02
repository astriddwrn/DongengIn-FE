import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import ButtonFavorit from './ButtonFavorit';
import Star from '../../../assets/images/common/bluestar.png';

const DeskripsiCerita = (props) => {
    const imagePath = process.env.PUBLIC_URL;
    // const [user, setUser] = useState({code:401});
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);

    
    return (
        <div className="deskripsi mt-48 w-10/12 my-0 mx-auto">
            <div className="content flex flex-row justify-center">
                <div className="w-1/3 ml-16">
                    <img className="object-cover h-full w-full" src={`${imagePath}${props.story.thumbnail}`} alt="" />
                </div>
                <div className="w-2/3 px-16">
                    <div className="text-4xl font-extrabold tracking-widest leading-relaxed mb-8">{props.story.title}</div>
                    <div className="text-2xl font-normal leading-10">{props.story.description}</div>
                    <div className="tags-container flex flex-row flex-wrap">
                        <div className="tags mt-8">
                            {props.story.categories}
                        </div>
                    </div>
                    <div className="ratings flex flex-row my-8">
                        <img className={""+((props.story.rating >= 1) ? '' : 'hidden')} src={Star} alt="" />
                        <img className={""+((props.story.rating >= 2) ? '' : 'hidden')} src={Star} alt="" />
                        <img className={""+((props.story.rating >= 3) ? '' : 'hidden')} src={Star} alt="" />
                        <img className={""+((props.story.rating >= 4) ? '' : 'hidden')} src={Star} alt="" />
                        <img className={""+((props.story.rating >= 5) ? '' : 'hidden')} src={Star} alt="" />
                    </div>
                    <a href={`${props.user.code==200? '/baca-malin-kundang'  : '/masuk'} `} className="mb-5 font-extrabold text-2xl tracking-wider text-cWhite bg-cPink rounded-full mr-8 py-3 px-8 w-52 text-center">Baca Buku</a>
                    <ButtonFavorit is_favorite={props.story.is_favorite}/>
                </div>
            </div>
        </div>
    );
};

export default DeskripsiCerita;
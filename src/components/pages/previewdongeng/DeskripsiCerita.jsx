import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import grayStar from '../../../assets/images/common/graystar.svg';
import blueStar from '../../../assets/images/common/bluestar.svg';
import FavoriteFill from '../../../assets/images/pages/preview-dongeng/favorite-fill.svg';
import FavoriteEmpty from '../../../assets/images/pages/preview-dongeng/favorite-empty.svg';

const DeskripsiCerita = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState('');
    const imagePath = process.env.PUBLIC_URL;
    const [bacaLink, setBacaLink] = useState('/masuk');
    const [fav, setFav] = useState(0);
    const [currStory, setCurrStory] = useState({title: null});
    const history = useHistory();

    useEffect(() => {
        fetch("https://dongengin.000webhostapp.com/api/story/"+props.story.id, {
          credentials: 'include',
        })
        .then(res => res.json())  
        .then(
          (result) => {
            setIsLoaded(true);
            setCurrStory(result);
            setFav(result.is_favorite);
            // console.log(result.is_favorite);
            // console.log(result);
            // console.log(fav);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
         )
        }, [])

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
    
    const sendFavorite = async (v) => {
        let data = { 'type' : 'set_favorite', 'value' : v };
        let postData = await fetch(('https://dongengin.000webhostapp.com/api/story/'+props.story.id) , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            credentials: 'include',
            body: encode(data)
        }) 
        if(postData.status===200){
            console.log('fav posted')
        }
    }

    const sendHistory = async (v) => {
        let data = { 'type' : 'increase_views', 'value' : v };
        let postData = await fetch(('https://dongengin.000webhostapp.com/api/story/'+props.story.id) , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            credentials: 'include',
            body: encode(data)
        }) 
        if(postData.status===200){
            console.log('fav posted')
        }
    }

    const handleFavorite = (v) => {
        if(props.user.fullname){
            sendFavorite(v);
            setFav(v);
        }else{
            history.push("/masuk");
        }
    }

    const handleHistory = () => {
        if(bacaLink === '/baca-malin-kundang'){
            sendHistory(props.story.id);
        }
    }

    useEffect(() => {
        if(props.user.fullname){
            setBacaLink('/baca-malin-kundang');
        }else{
            setBacaLink('/masuk')
        }
      }, [props.user])
  
    return (
        <div className="deskripsi mt-48 w-10/12 my-0 mx-auto">
            <div className="content flex flex-row justify-center">
                <div className="w-1/3 ml-16">
                    <img className="object-cover w-full rounded-lg" src={`${imagePath}${props.story.thumbnail}`} alt="" />
                </div>
                <div className="w-2/3 px-16">
                    <div className="text-5xl font-extrabold tracking-widest leading-relaxed mb-8">{props.story.title}</div>
                    <div className="text-2xl font-normal leading-10">{props.story.description}</div>
                    <div className="tags-container flex flex-row flex-wrap">
                        {props.story.categories.map(d=>
                        <div className="tags mt-8 text-xl mr-3">
                            {d}
                        </div>
                        )}
                    </div>
                    <div className="ratings flex flex-row my-8">
                        <img className={""+((props.story.rating >= 1) ? '' : 'hidden')} src={blueStar} alt="" />
                        <img className={""+((props.story.rating >= 2) ? '' : 'hidden')} src={blueStar} alt="" />
                        <img className={""+((props.story.rating >= 3) ? '' : 'hidden')} src={blueStar} alt="" />
                        <img className={""+((props.story.rating >= 4) ? '' : 'hidden')} src={blueStar} alt="" />
                        <img className={""+((props.story.rating >= 5) ? '' : 'hidden')} src={blueStar} alt="" />

                        <img className={""+((props.story.rating <= 5) ? '' : 'hidden')} src={grayStar} alt="" />
                        <img className={""+((props.story.rating <= 4) ? '' : 'hidden')} src={grayStar} alt="" />
                        <img className={""+((props.story.rating <= 3) ? '' : 'hidden')} src={grayStar} alt="" />
                        <img className={""+((props.story.rating <= 2) ? '' : 'hidden')} src={grayStar} alt="" />
                        <img className={""+((props.story.rating <= 1) ? '' : 'hidden')} src={grayStar} alt="" />
                    </div>

                    <div className="flex flex-row w-full items-center mt-10">
                        <Link to={bacaLink} className="mr-20 font-extrabold text-2xl tracking-wider text-cWhite bg-cPink rounded-full py-3 px-8 w-60 text-center btnPink"
                            onClick={()=>handleHistory()}>Baca Buku</Link>

                        {fav=='1'?
                            // <button className="font-extrabold text-2xl tracking-widest text-cWhite bg-cPink rounded-full mr-8 py-3 px-8 btnReversePink">
                                <img className="w-14 cursor-pointer" src={FavoriteFill} onClick={()=> handleFavorite(false)} alt="" />
                            // {/* </button> */}
                        :
                            // <button className="text-cPink font-extrabold text-2xl tracking-wide font-extrabold border-2 border-cPink rounded-full mr-8 py-3 px-8 btnPink"
                            //  >
                                <img className="w-14 cursor-pointer"  onClick={()=> handleFavorite(true)} src={FavoriteEmpty} alt="" />
                            // </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeskripsiCerita;
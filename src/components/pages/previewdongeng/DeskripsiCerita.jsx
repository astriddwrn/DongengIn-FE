import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Star from '../../../assets/images/common/bluestar.png';

const DeskripsiCerita = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState('');
    const imagePath = process.env.PUBLIC_URL;
    const [bacaLink, setBacaLink] = useState('/masuk');
    const [fav, setFav] = useState(0);
    const [currStory, setCurrStory] = useState({title: null});

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
    
    const sendData = async (v) => {
        const data = { 'type' : 'set_favorite', 'value' : v };
        var postData = await fetch(('https://dongengin.000webhostapp.com/api/story/'+props.story.id) , {
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

    const handleSubmit = (v) => {
        sendData(v);
        setFav(v);
        console.log(props.story)
    }

    useEffect(() => {
        let isSubscribed = true
        if(props.user.code==200 && isSubscribed){
            setBacaLink('/baca-malin-kundang')
        }else{
            setBacaLink('/masuk')
        }
        return () => {
          isSubscribed = false
        }
      }, [props.user])
  
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
                        {props.story.categories.map(d=>
                        <div className="tags mt-8 text-xl mr-3">
                            {d}
                        </div>
                        )}
                    </div>
                    <div className="ratings flex flex-row my-8">
                        <img className={"w-40 "+((props.story.rating >= 1) ? '' : 'hidden')} src={Star} alt="" />
                        <img className={""+((props.story.rating >= 2) ? '' : 'hidden')} src={Star} alt="" />
                        <img className={""+((props.story.rating >= 3) ? '' : 'hidden')} src={Star} alt="" />
                        <img className={""+((props.story.rating >= 4) ? '' : 'hidden')} src={Star} alt="" />
                        <img className={""+((props.story.rating >= 5) ? '' : 'hidden')} src={Star} alt="" />
                    </div>

                    <Link to='/baca-malin-kundang' className="mb-5 font-extrabold text-2xl tracking-wider text-cWhite bg-cPink rounded-full mr-8 py-3 px-8 w-52 text-center btnPink">Baca Buku</Link>

                    {fav=='1'?
                        <button className="font-extrabold text-2xl tracking-widest text-cWhite bg-cPink rounded-full mr-8 py-3 px-8 btnReversePink"
                        onClick={()=> handleSubmit(false)} >Hapus dari Favorit</button>
                    :
                        <button className="text-cPink font-extrabold text-2xl tracking-wide font-extrabold border-2 border-cPink rounded-full mr-8 py-3 px-8 btnPink"
                        onClick={()=> handleSubmit(true)} >Tambahkan Ke Favorit</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default DeskripsiCerita;
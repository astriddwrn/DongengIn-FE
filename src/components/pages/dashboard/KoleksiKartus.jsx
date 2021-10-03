import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Coin from '../../../assets/images/pages/dashboard/coin.svg'
/* import { data } from 'autoprefixer'; */

const KoleksiKartus = (props) => {

  const imagePath = process.env.PUBLIC_URL;
  const [checkKartu, setcheckKartu] = useState([]);
  const [kartu, setKartu] = useState([
    {
      id: 1,
      title: "Ayam",
      price: 500,
      thumbnail: "/assets/cards/ayam.svg"
    },
    {
      id: 2,
      title: "Jaka Sembung",
      price: 1000,
      thumbnail: "/assets/cards/jakasembung.svg"
    },
    {
      id: 3,
      title: "Jaka Tingkir",
      price: 1000,
      thumbnail: "/assets/cards/jakatingkir.svg"
    },
    {
      id: 4,
      title: "Zaitun",
      price: 400,
      thumbnail: "/assets/cards/zaitun.svg"
    },
    {
      id: 5,
      title: "Kartini",
      price: 750,
      thumbnail: "/assets/cards/kartini.svg"
    },
    {
      id: 6,
      title: "Si Pitung",
      price: 1200,
      thumbnail: "/assets/cards/sipitung.svg"
    },
    {
      id: 7,
      title: "Roma Irama",
      price: 750,
      thumbnail: "/assets/cards/romairama.svg"
    },
    {
      id: 8,
      title: "Sultan",
      price: 550,
      thumbnail: "/assets/cards/sultan.svg"
    },
    {
      id: 9,
      title: "Kapitan Kuda",
      price: 650,
      thumbnail: "/assets/cards/kaptenkuda.svg"
    },
  ]);
  
  useEffect(() => {
    setcheckKartu(props.user.cards);
    console.log(checkKartu);
  }, [props.user])

  return (
    <>
      <header className="w-full text-3xl font-bold px-4 py-3 bg-cWhite">
        Koleksi Kartu
      </header>
      <main className="bg-cLightBlue w-full min-h-screen p-10 grid grid-cols-4 grid-rows-4 gap-10">

        {/* {kartu.map(d =>
          <div className="bg-cWhite p-4 rounded-xl relative">
            <div className="w-full absolute font-extrabold text-xl text-center text-cWhite bottom-8 left-0">{d.title}</div>
            <img className={"w-64 " + ((props.user.cards).indexOf(d.id) > -1 ? "filter blur-sm brightness-50" : "")} src={`${imagePath}${d.thumbnail}`} alt="" />
          </div>
        )} */}

        {checkKartu ?
           (kartu.map(d =>
             <div className="bg-cWhite p-4 rounded-xl relative">
               {/*  <div className="flex flex-row items-center absolute">
                 <div className="font-extrabold">{d.price}</div>
               </div> */}
                <div className="w-full absolute font-extrabold text-xl text-center text-cWhite bottom-8 left-0">{d.title}</div>
                <img className={"w-64 " + ((checkKartu).indexOf(d.id) > -1 ? "filter blur-sm brightness-50" : "")} src={`${imagePath}${d.thumbnail}`} alt="" /> 
            </div>
          )): <div className="font-semibold text-2xl text-cPurple mt-4">Loading...</div>}
        
      </main>
    </>
  )
}

export default KoleksiKartus;

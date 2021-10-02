import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Coin from '../../../assets/images/pages/dashboard/coin.svg'
import Malin from '../../../assets/images/pages/beranda/terfavorit-malin.svg';
import { data } from 'autoprefixer';

const KoleksiKartus = () => {

  const [userData, setuserData] = useState([
    {
      "title": "Pitung",
      "isHave": 1,
    }
  
  ]);

  return (
    <>
      <main className="bg-cLightBlue flex w-full min-h-screen p-10 grid grid-cols-2 grid-rows-3 gap-10">

        <div className="bg-cWhite py-8 px-16 rounded-xl">
          <img src={userData[0]} alt="" />
        </div>

      </main>
    </>
  )
}

export default KoleksiKartus;

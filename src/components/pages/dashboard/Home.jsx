import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Coin from '../../../assets/images/pages/dashboard/coin.svg'
/* import Malin from '../../../assets/images/pages/beranda/terfavorit-malin.svg'; */
const Home = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userData, setuserData] = useState([
    {
      "fullname":"User Name",
      "username":"username123",
      "birthdate": "31/10/2020",
      "parentname": "Michellin Gray",
      "parentemail": "michellin.g@gmail.com",
      "favorites":[
        {
          "id":1,
          "title":"Malin Kundang",
          "thumbnail":"terfavorit-malin",
          "routes":"/story/malin_kundang",
          "description":"Lorem ipsum dolor sit amet",
          "categories":["Miangkabau", "dongeng"],
          "rate":2.5,
          "rated":4,
          "total_views":120,
          "total_favorites":23,
          "total_pages":8,
          "total":151
        },
        
        {
          "id":2,
          "title":"Mamam",
          "thumbnail":"terfavorit-malin",
          "description": "Lorem ipsum dolor sit amet",
          "routes":"/story/mamam",
          "categories":["Riau", "dongeng"],
          "rate":2.5,
          "rated":4,
          "total_views":120,
          "total_favorites":23,
          "total_pages":8,
          "total":151
        },

        {
          "id":3,
          "title":"Pitung",
          "thumbnail":"terfavorit-malin",
          "description": "Lorem ipsum dolor sit amet",
          "routes":"/story/mamam",
          "categories":["Riau", "dongeng"],
          "rate":2.5,
          "rated":4,
          "total_views":120,
          "total_favorites":23,
          "total_pages":8,
          "total":151
        },
      ],
      "poins": 200,
      "coins": 100,
      "rank": 4
    }
  
  ]);
  
  /* useEffect(() => {
    fetch("https://dongengin.000webhostapp.com/api/user")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setuserData(result);
        },
        (error) => {
          console.log("yes");
          setIsLoaded(true);
        }
      )
  }, []) */

  return (
    <>
      <header className="w-full text-3xl font-bold px-4 py-3 bg-cWhite">
        Profil
      </header>
      <main className="bg-cLightBlue flex w-full min-h-screen p-10 grid grid-cols-2 grid-rows-3 gap-10">
        <div className="bg-cWhite py-8 px-16 rounded-xl">
          <p className="text-3xl font-extrabold">Peringkat Kamu</p>
          <p className="text-8xl font-extrabold text-center mt-10">{userData[0].rank}</p>
        </div>
        <div className="bg-cWhite py-8 px-16 rounded-xl">
          
        </div>

        {/* Cerita Favorit */}
        <div className="bg-cWhite py-8 px-16 rounded-xl row-span-2">
          <p className="text-3xl font-extrabold">Cerita Favorit</p>
          <div className="flex flex-row justify-between flex-wrap">
            {userData[0].favorites.map(d => 
              <Link className="mt-10 w-32 flex justify-center relative"
              to={d.routes}>
                <div className="font-semibold text-cWhite absolute bottom-2">{d.title}</div>
                <img className="object-cover object-center h-full w-full" src={require(`../../../assets/images/pages/beranda/${d.thumbnail}.svg`).default} alt="" />
              </Link>
            )}
          
          </div>

        </div>
        
        {/* Poin */}
        <div className="bg-cWhite py-8 px-16 rounded-xl">
          <p className="text-3xl font-extrabold">Poin Kamu</p>
          <p className="text-8xl font-extrabold text-center mt-10">{userData[0].poins}</p>
        </div>

        {/* Profil */}
        <div className="bg-cWhite py-8 px-16 rounded-xl row-span-2 h-5/6">
          <p className="text-3xl font-extrabold mb-5">Profil</p>
          <div className="mb-4">
            <p className="text-lg">Nama Anak</p>
            <p className="text-2xl font-bold mt-2">{userData[0].fullname}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg">Tanggal Lahir Anak</p>
            <p className="text-2xl font-bold mt-2">{userData[0].birthdate}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg">Nama Orang Tua</p>
            <p className="text-2xl font-bold mt-2">{userData[0].parentname}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg">Email Orang Tua</p>
            <p className="text-2xl font-bold mt-2">{userData[0].parentemail}</p>
          </div>
          <div>
            <p className="text-lg">Username</p>
            <p className="text-2xl font-bold mt-2">{userData[0].username}</p>
          </div>
        </div>
        
        {/* Riwayat */}
        <div className="bg-cWhite py-8 px-16 rounded-xl">
          <p className="text-3xl font-extrabold mb-7">Riwayat</p>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-extrabold">Luntung Kasarung</p>
            <Link
              className="text-cWhite bg-cPink px-6 py-2 font-extrabold rounded-3xl"
              to=""
            >
              Baca Buku
            </Link>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-extrabold">Kancing dan Timun</p>
            <Link
              className="text-cWhite bg-cPink px-6 py-2 font-extrabold rounded-3xl"
              to=""
            >
              Baca Buku
            </Link>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-extrabold">Si Pitung</p>
            <Link
              className="text-cWhite bg-cPink px-6 py-2 font-extrabold rounded-3xl"
              to=""
            >
              Baca Buku
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home

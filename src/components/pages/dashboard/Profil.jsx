import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Coin from '../../../assets/images/pages/dashboard/coin.svg'

const Profil = (props) => {

    const [favorites, setFavorites] = useState([]);
    const [history, setHistory] = useState([]);
    const imagePath = process.env.PUBLIC_URL;

    useEffect(() => {
        setFavorites(props.user.favorites);
        setHistory(props.user.history);

    }, [props.user])

    return (
        <>
        <header className="w-full text-3xl font-bold px-4 py-3 bg-cWhite">
            Profil
        </header>
        <main className="bg-cLightBlue flex w-full min-h-screen p-10 grid grid-cols-2 grid-rows-3 gap-10">
            <div className="bg-cWhite py-8 px-16 rounded-xl">
            <p className="text-3xl font-extrabold">Peringkat Kamu</p>
            <p className="text-8xl font-extrabold text-center mt-10">{props.user.rank}</p>
            </div>
            <div className="bg-cWhite py-8 px-16 rounded-xl">
            <p className="text-3xl font-extrabold">Koin Kamu</p>
            <div className="flex flex-row justify-center items-center mt-10">
                <p className="text-8xl font-extrabold text-center">{props.user.coins}</p>
                <img className="ml-4" src={Coin} alt="" />
            </div>
            </div>

            {/* Cerita Favorit */}
            <div className="bg-cWhite py-8 px-16 rounded-xl row-span-2">
            <p className="text-3xl font-extrabold">Cerita Favorit</p>
            <div className="flex flex-row flex-wrap mt-8">
                {favorites ?  favorites.map(d =>
                <Link key={d.id} className="mt-2 w-32 flex justify-center relative mr-2"
                to={d.route}>
                    <div className="font-semibold text-cWhite text-center absolute bottom-2">{d.title}</div>
                    <img className="object-cover object-center h-full w-full" src={`${imagePath}${d.thumbnail}`} alt="" />
                </Link>
                ) : <div className="font-semibold text-2xl text-cPurple mt-4">Loading...</div>}
            </div>
            </div>
            
            {/* Poin */}
            <div className="bg-cWhite py-8 px-16 rounded-xl">
            <p className="text-3xl font-extrabold">Poin Kamu</p>
            <p className="text-8xl font-extrabold text-center mt-10">{props.user.poins}</p>
            </div>

            {/* Profil */}
            <div className="bg-cWhite py-8 px-16 rounded-xl row-span-2">
            <p className="text-3xl font-extrabold mb-5">Profil</p>
            <div className="mb-4">
                <p className="text-lg">Nama Anak</p>
                <p className="text-2xl font-bold mt-2">{props.user.fullname}</p>
            </div>
            <div className="mb-4">
                <p className="text-lg">Tanggal Lahir Anak</p>
                <p className="text-2xl font-bold mt-2">{props.user.birthdate ? props.user.birthdate.slice(0, 10) : "Loading..."}</p>
            </div>
            <div>
                <p className="text-lg">Username</p>
                <p className="text-2xl font-bold mt-2">{props.user.username}</p>
            </div>
            </div>
            
            {/* Riwayat */}
            <div className="bg-cWhite py-8 px-16 rounded-xl">
            <p className="text-3xl font-extrabold mb-7">Riwayat</p>

            {history ? history.map(d =>
                <div key={d.id} className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold">{d.title}</p>
                <Link
                    className="text-cWhite bg-cPink px-7 py-1 font-semibold rounded-3xl btnPink"
                    to={d.route}
                >
                    Lihat
                </Link>
                </div>
                ) : <div className="font-semibold text-2xl text-cPurple mt-4">Loading...</div>}
            
            </div>
        </main>
        </>
    )
}

export default Profil;

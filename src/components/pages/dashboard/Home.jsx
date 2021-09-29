import { Link } from 'react-router-dom'
import Coin from '../../../assets/images/pages/dashboard/coin.svg'

const Home = () => {
  return (
    <>
      <header className="w-full text-3xl font-bold px-4 py-3 bg-cWhite">
        Profil
      </header>
      <main className="bg-cLightBlue flex w-full min-h-screen p-10 grid grid-cols-2 grid-rows-3 gap-10">
        <div className="bg-cWhite py-8 px-16 rounded-xl">
          <p className="text-3xl font-extrabold">Peringkat Kamu</p>
          <p className="text-8xl font-extrabold text-center mt-10">12</p>
        </div>
        <div className="bg-cWhite py-8 px-16 rounded-xl">
          <p className="text-3xl font-extrabold">Koin Kamu</p>
          <div className="text-8xl font-extrabold mt-10 flex justify-center">
            <p className="mr-2">728</p>
            <img src={Coin} alt="" />
          </div>
        </div>
        <div className="bg-cWhite py-8 px-16 rounded-xl row-span-2">
          <p className="text-3xl font-extrabold">Cerita Favorit</p>
          <div className="mt-10 flex justify-center"></div>
        </div>
        <div className="bg-cWhite py-8 px-16 rounded-xl">
          <p className="text-3xl font-extrabold">Poin Kamu</p>
          <p className="text-8xl font-extrabold text-center mt-10">208</p>
        </div>
        <div className="bg-cWhite py-8 px-16 rounded-xl row-span-2 h-5/6">
          <p className="text-3xl font-extrabold mb-5">Profil</p>
          <div className="mb-4">
            <p className="text-lg">Nama Anak</p>
            <p className="text-2xl font-bold mt-2">Bryan Miraclos</p>
          </div>
          <div className="mb-4">
            <p className="text-lg">Tanggal Lahir Anak</p>
            <p className="text-2xl font-bold mt-2">14 September 2006</p>
          </div>
          <div className="mb-4">
            <p className="text-lg">Nama Orang Tua</p>
            <p className="text-2xl font-bold mt-2">Michellin Gray</p>
          </div>
          <div className="mb-4">
            <p className="text-lg">Email Orang Tua</p>
            <p className="text-2xl font-bold mt-2">michellin.g@gmail.com</p>
          </div>
          <div>
            <p className="text-lg">Username</p>
            <p className="text-2xl font-bold mt-2">bryanm</p>
          </div>
        </div>
        <div className="bg-cWhite py-8 px-16 rounded-xl">
          <p className="text-3xl font-extrabold mb-7">Riwayat</p>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-extrabold">Malin Kundang</p>
            <Link
              className="text-cWhite bg-cPink px-6 py-2 font-extrabold rounded-3xl"
              to=""
            >
              Baca Buku
            </Link>
          </div>
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

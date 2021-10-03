import User from '../../assets/images/common/sidebar/user.svg'
import Profil from '../../assets/images/common/sidebar/profil.svg'
import ProfilNon from '../../assets/images/common/sidebar/profilnon.svg'
import Beranda from '../../assets/images/common/sidebar/beranda.svg'
import KoleksiNon from '../../assets/images/common/sidebar/koleksinon.svg'
import Koleksi from '../../assets/images/common/sidebar/koleksi.svg'
import Keluar from '../../assets/images/common/sidebar/keluar.svg'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ user, children, currRoute }) => {
    
    const sendData = async () => {
        var logout = await fetch('https://dongengin.000webhostapp.com/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                credentials: 'include',
            })
            if (logout.status == 200) {
                console.log("berhasil logout");
            }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData();
    }

  return (
    <section className="flex">
      <nav className="sidebar p-8 h-screen sticky top-0 flex flex-col">
        <div className="text-2xl flex flex-col justify-center items-center">
          <img className="w-32" src={User} alt="" />
          <p className="mt-4">Halo,</p>
          <p className="font-bold">{user.fullname}</p>
        </div>
        <div className="mt-16">
          <Link to="/profil" className="flex items-center mb-10">
            <img className={`cursor-pointer ${currRoute==='Dashboard' ? 'w-10' : 'hidden'}`} src={Profil} alt="" />
            <img className={`cursor-pointer ${currRoute==='Dashboard' ? 'hidden' : 'w-10'}`} src={ProfilNon} alt="" />
            <p className="text-lg font-bold ml-4">Profil</p>
          </Link>
          <Link to="/koleksi-kartu" className="flex items-center">
            <img className={`cursor-pointer ${currRoute==='KoleksiKartu' ? 'hidden' : 'w-10'}`} src={KoleksiNon} alt="" />
            <img className={`cursor-pointer ${currRoute==='KoleksiKartu' ? 'w-10' : 'hidden'}`} src={Koleksi} alt="" />
            <p className="text-lg font-bold ml-4">Koleksi Kartu</p>
          </Link>
        </div>
        <div className="mt-auto">
          <Link to="/" className="flex items-center mb-10">
            <img className="w-10" src={Beranda} alt="" />
            <p className="text-lg font-bold ml-4">Kembali ke Beranda</p>
          </Link>
          <form onSubmit={handleSubmit}>
            <button className="flex items-center pl-2">
              <img className="w-7" src={Keluar} alt="" />
              <p className="text-lg font-bold ml-4 text-cPurple">Keluar</p>
            </button>
          </form>
        </div>
      </nav>
      <section className="sidebar-content">{children}</section>
    </section>
  )
}

export default Sidebar

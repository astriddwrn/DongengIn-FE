import User from '../../assets/images/common/sidebar/user.svg'
import Profil from '../../assets/images/common/sidebar/profil.svg'
import Beranda from '../../assets/images/common/sidebar/beranda.svg'
import Koleksi from '../../assets/images/common/sidebar/koleksi.svg'
import Keluar from '../../assets/images/common/sidebar/keluar.svg'
import { Link } from 'react-router-dom'

const Sidebar = ({ children }) => {
  return (
    <section className="flex">
      <nav className="sidebar p-8 h-screen sticky top-0 flex flex-col">
        <div className="text-2xl flex flex-col justify-center items-center">
          <img className="w-32" src={User} alt="" />
          <p className="mt-4">Halo,</p>
          <p className="font-bold">Bryan Miraclos!</p>
        </div>
        <div className="mt-16">
          <Link to="" className="flex items-center mb-10">
            <img className="w-10" src={Profil} alt="" />
            <p className="text-lg font-bold ml-4">Profil</p>
          </Link>
          <Link to="" className="flex items-center">
            <img className="w-10" src={Koleksi} alt="" />
            <p className="text-lg font-bold ml-4">Koleksi Kartu</p>
          </Link>
        </div>
        <div className="mt-auto">
          <Link to="" className="flex items-center mb-10">
            <img className="w-10" src={Beranda} alt="" />
            <p className="text-lg font-bold ml-4">Kembali ke Beranda</p>
          </Link>
          <Link to="" className="flex items-center">
            <img className="w-7" src={Keluar} alt="" />
            <p className="text-lg font-bold ml-4 text-cPurple">Keluar</p>
          </Link>
        </div>
      </nav>
      <section className="sidebar-content">{children}</section>
    </section>
  )
}

export default Sidebar

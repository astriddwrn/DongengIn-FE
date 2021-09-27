import React from "react";

import bg from '../../../assets/images/pages/auth/auth-bg.jpg';

const DaftarForm = () => {
  
    return (
        <div className="daftar mt-24 my-0">
            <div className="content w-full flex flex-row relative">
                <div className="w-2/4 px-32">
                    <div className="flex flex-col">
                        <div className="text-cPink text-5xl text-center font-extrabold mb-8">Daftar</div>
                        <label className="flex flex-col font-bold text-cPink mb-6" htmlFor="parentname">
                            Nama Orangtua
                            <input className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-2 px-4" placeholder="Nama Orangtua" type="text" name="parentname"/>
                        </label>
                        <label className="flex flex-col font-bold text-cPink mb-6" htmlFor="kidname">
                            Nama Anak
                            <input className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-2 px-4" placeholder="Nama Anak" type="text" name="kidname"/>
                        </label>
                        <label className="flex flex-col font-bold text-cPink mb-6" htmlFor="borndate">
                            Tanggal Lahir Anak
                            <input className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-2 px-4" placeholder="Nama Anak" type="date" name="borndate"/>
                        </label>
                        <label className="flex flex-col font-bold text-cPink mb-6" htmlFor="email">
                            Email Orang Tua
                            <input className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-2 px-4" placeholder="Email Orang Tua" type="email" name="email"/>
                        </label>

                        {/* DATA KEPERLUAN AKUN */}
                        <div className="font-extrabold text-cPink text-4xl text-center mt-6 mb-8">Data Untuk Keperluan Akun</div>
                        <label className="flex flex-col font-bold text-cPink mb-6" htmlFor="username">
                            Username
                            <input className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-2 px-4" placeholder="Username" type="text" name="username"/>
                        </label>
                        <label className="flex flex-col font-bold text-cPink mb-6" htmlFor="password">
                            Password
                            <input className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-2 px-4" placeholder="Password" type="password" name="password"/>
                        </label>
                        <label className="flex flex-col font-bold text-cPink mb-6" htmlFor="confirmpassword">
                            Confirm Password
                            <input className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-2 px-4" placeholder="Confirm Password" type="password" name="confirmpassword"/>
                        </label>
                        
                        <button className="w-min font-extrabold text-2xl text-cWhite bg-cPurple rounded-full py-3 px-24 mt-4 mb-16 mx-auto">Daftar</button>
                    
                    </div>
                </div>
                <div className="w-2/4 fixed right-0">
                    <img className="" src={bg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DaftarForm;
import React from "react";

import bg from '../../../assets/images/pages/auth/auth-bg.jpg';
import googlelogo from '../../../assets/images/common/googlelogo.png';

const MasukForm = () => {
  
    return (
        <div className="masuk mt-24 my-0">
            <div className="content w-full flex flex-row relative">
                <div className="w-2/4 px-32">
                    <div className="flex flex-col">
                        <div className="text-cPink text-5xl text-center font-extrabold mt-8 mb-8">Masuk</div>
                        <label className="flex flex-col font-bold text-lg text-cPink mb-2 mt-4" htmlFor="username">
                            Username
                            <input className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-3 px-6" placeholder="Username" type="text" name="username"/>
                        </label>
                        {/* <div className="errormsg">
                            errormsg
                        </div> */}
                        <label className="flex flex-col font-bold text-lg text-cPink mb-2 mt-4" htmlFor="password">
                            Password
                            <input className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-3 px-6" placeholder="Password" type="password" name="password"/>
                        </label>
                        <div className="text-cPink text-lg font-bold mt-2">Kamu belum punya akun? <span><a href="" className="text-cPurple underline">Yuk Daftar</a></span></div>
                        <button className="w-min font-extrabold text-2xl text-cWhite bg-cPurple rounded-full py-3 px-24 mt-8 mb-12 mx-auto">Masuk</button>
                        <button className="googlebutton font-bold text-lg flex flex-row justify-center items-center mb-8 mx-auto">
                            <span><img className="w-6 mr-5" src={googlelogo} alt="" /></span>Masuk dengan Google
                        </button>
                    </div>
                </div>
                <div className="w-2/4 fixed right-0">
                    <img className="" src={bg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MasukForm;
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import bg from '../../../assets/images/pages/auth/auth-bg.jpg';

const DaftarForm = () => {
    
    const [fullname, setFullname] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const data = { fullname, birthdate, username, password };
    const loginData = { username, password };
    
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
    
    const sendData = async () => {
        var res = await fetch('https://dongengin.000webhostapp.com/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            credentials: 'include',
            body: encode(data)
        }) 
        if (res.status == 200) {
            console.log("farhanmabar");
            var login = await fetch('https://dongengin.000webhostapp.com/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                credentials: 'include',
                body: encode(loginData)
            })
            if (login.status == 200) {
                console.log("berhasil log in");
                window.setUser([
                    {
                        code : 200,
                    }
                ]);
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData();
    }

    return (
        <form onSubmit={handleSubmit} className="daftar mt-24 my-0">
            <div className="content w-full flex flex-row relative">
                <div className="w-2/4 px-32">
                    <div className="flex flex-col">
                        <div className="text-cPink text-5xl text-center font-extrabold mt-8 mb-8">Daftar</div>
                        {/* <div className="errormsg">
                            errormsg
                        </div> */}
                        <label className="flex flex-col font-bold text-lg text-cPink mb-2 mt-4" htmlFor="fullname">
                            Nama Anak
                            <input
                                className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-3 px-6"
                                placeholder="Nama Anak"
                                type="text"
                                name="fullname"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                required
                            />
                        </label>
                        <label className="flex flex-col font-bold text-lg text-cPink mb-2 mt-4" htmlFor="birthdate">
                            Tanggal Lahir Anak
                            <input
                                className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-3 px-6"
                                placeholder="Nama Anak"
                                type="date"
                                name="birthdate"
                                value={birthdate}
                                onChange={(e) => setBirthdate(e.target.value)}
                                required
                            />
                        </label>
                        <label className="flex flex-col font-bold text-lg text-cPink mb-2 mt-4" htmlFor="username">
                            Username
                            <input
                                className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-3 px-6"
                                placeholder="Username"
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </label>
                        <label className="flex flex-col font-bold text-lg text-cPink mb-2 mt-4" htmlFor="password">
                            Password
                            <input
                                className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-3 px-6"
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        
                        <button
                            className="w-min font-extrabold text-2xl text-cWhite bg-cPurple rounded-full py-3 px-24 mt-8 mb-16 mx-auto"
                        >Daftar
                        </button>
                    
                    </div>
                </div>
                {/* <div className=""> */}
                    <img className="object-cover w-2/4 fixed right-0 h-screen" src={bg} alt="" />
                {/* </div> */}
            </div>
        </form>
    )
}

export default DaftarForm;
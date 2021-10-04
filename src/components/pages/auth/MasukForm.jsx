import React, { useState } from "react";

import bg from '../../../assets/images/pages/auth/auth-bg.jpg';

const MasukForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
        var login = await fetch('https://dongengin.000webhostapp.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            credentials: 'include',
            body: encode(loginData)
        })
        if (login.status == 200) {
            setError('');
            document.location.href="/profil";
        }
        else{
            setError('Username atau password yang kamu masukan salah.')
        }
    }

    const usernameValidation = (e) => {
        if(!username){
            document.getElementById('username-error').textContent = 'Username tidak boleh kosong.';
            return false;
        } else{
            document.getElementById('username-error').textContent = '';
            return true;
        }
    }

    const passwordValidation = (e) => {
        if(!password){
            document.getElementById('password-error').textContent = 'Password tidak boleh kosong.';
            return false;
        }
        else{
            document.getElementById('password-error').textContent = '';
            return true;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let $username = usernameValidation();
        let $password = passwordValidation();

        setTimeout(() => {
            if($username && $password){
                sendData();
            }
        }, 300)
    }

    return (
        <form onSubmit={handleSubmit} className="masuk mt-24 my-0">
            <div className="content w-full flex flex-row relative">
                <div className="w-2/4 px-32">
                    <div className="flex flex-col">
                        <div className="text-cPink text-5xl text-center font-extrabold mt-8 mb-8">Masuk</div>
                        <div className="text-center error-msg">{error}</div>
                        <label className="flex flex-col font-bold text-lg text-cPink mb-2 mt-4" htmlFor="username">
                            Username
                            <input
                                className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-3 px-6"
                                placeholder="Username"
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onBlur={() => usernameValidation()}
                                required
                            />
                        </label>
                        <span id="username-error" className="error-msg"></span>
                        <label className="flex flex-col font-bold text-lg text-cPink mb-2 mt-4" htmlFor="password">
                            Password
                            <input
                                className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-3 px-6"
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={() => passwordValidation()}
                                required
                            />
                        </label>
                        <span id="password-error" className="error-msg"></span>
                        <div className="text-cPink text-lg font-bold mt-2">Kamu belum punya akun? <span><a href="" className="text-cPurple underline">Yuk Daftar</a></span></div>
                        <button className="w-min font-extrabold text-2xl text-cWhite bg-cPurple rounded-full py-3 px-24 mt-8 mb-12 mx-auto btnPurple">Masuk</button>
                    </div>
                </div>
                <img className="object-cover w-2/4 fixed right-0 h-screen" src={bg} alt="" />
            </div>
        </form>
    )
}

export default MasukForm;
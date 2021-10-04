import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import bg from '../../../assets/images/pages/auth/auth-bg.jpg';

const DaftarForm = () => {
    
    const [fullname, setFullname] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                document.location.href="/profil";
                window.setUser([
                    {
                        code : 200,
                    }
                ]);
            }
        }
    }

    const nameValidation = (e) => {
        if(!fullname){
            document.getElementById('name-error').textContent = 'Nama tidak boleh kosong.';
            return false;
        }
        else if(fullname.length < 3){
            document.getElementById('name-error').textContent = 'Mohon menggunakan setidaknya 3 karakter.';
            return false;
        }
        else{
            document.getElementById('name-error').textContent = '';
            return true;
        }
    }

    const usernameValidation = (e) => {
        if(!username){
            document.getElementById('username-error').textContent = 'Username tidak boleh kosong.';
            return false;
        }
        else if(/\s/g.test(username)){
            document.getElementById('username-error').textContent = 'Username tidak boleh menggunakan spasi';
            return false;
        }
        else{
            document.getElementById('username-error').textContent = '';
            return true;
        }
    }

    const birthdateValidation = (e) => {
        if(!birthdate){
            document.getElementById('birthdate-error').textContent = 'Tanggal lahir tidak boleh kosong.';
            return false;
        }
        else{
            document.getElementById('birthdate-error').textContent = '';
            return true;
        }
    }

    const passwordValidation = (e) => {
        if(!password){
            document.getElementById('password-error').textContent = 'Password tidak boleh kosong.';
            return false;
        }
        else if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(password))){
            document.getElementById('password-error').textContent = 'Password harus memiliki setidaknya satu huruf kapital, satu huruf kecil, satu angka, dan satu karakter unik.';
            return false;
        }
        else{
            document.getElementById('password-error').textContent = '';
            return true;
        }
    }

    const confirmpasswordValidation = (e) => {
        if(!confirmPassword){
            document.getElementById('confirmpassword-error').textContent = 'Konfirmasi password tidak boleh kosong.';
            return false;
        }
        else if(confirmPassword!==password){
            document.getElementById('confirmpassword-error').textContent = 'Password tidak sama.';
            return false;
        }
        else{
            document.getElementById('confirmpassword-error').textContent = '';
            return true;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let $name = nameValidation();
        let $birthdate = birthdateValidation();
        let $username = usernameValidation();
        let $password = passwordValidation();
        let $confirmpassword = confirmpasswordValidation();
        
        setTimeout(() => {
            if($name && $birthdate && $username && $password && $confirmpassword){
                sendData();
            }
        }, 300)
    }

    return (
        <form onSubmit={handleSubmit} className="daftar mt-24 my-0">
            <div className="content w-full flex flex-row relative">
                <div className="w-2/4 px-32">
                    <div className="flex flex-col">
                        <div className="text-cPink text-5xl text-center font-extrabold mt-8 mb-8">Daftar</div>
                        <label className="flex flex-col font-bold text-lg text-cPink mb-2 mt-4" htmlFor="fullname">
                            Nama Anak
                            <input
                                className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-3 px-6"
                                placeholder="Nama Anak"
                                type="text"
                                name="fullname"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                onBlur={(e) => nameValidation(e.target.value)}
                                required
                            />
                        </label>
                        <span id="name-error" className="error-msg"></span>
                        <label className="flex flex-col font-bold text-lg text-cPink mb-2 mt-4" htmlFor="birthdate">
                            Tanggal Lahir Anak
                            <input
                                className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-3 px-6"
                                placeholder="Nama Anak"
                                type="date"
                                name="birthdate"
                                value={birthdate}
                                onChange={(e) => setBirthdate(e.target.value)}
                                onBlur={() => birthdateValidation()}
                                required
                            />
                        </label>
                        <span id="birthdate-error" className="error-msg"></span>
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
                        <label className="flex flex-col font-bold text-lg text-cPink mb-2 mt-4" htmlFor="password">
                            Konfirmasi Password
                            <input
                                className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-3 px-6"
                                placeholder="Konfirmasi Password"
                                type="password"
                                name="confirmpassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onBlur={() => confirmpasswordValidation()}
                                required
                            />
                        </label>
                        <span id="confirmpassword-error" className="error-msg"></span>
                        
                        <button
                            className="w-min font-extrabold text-2xl text-cWhite bg-cPurple rounded-full py-3 px-24 mt-8 mb-16 mx-auto btnPurple"
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
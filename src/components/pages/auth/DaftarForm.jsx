import React, { useState, useEffect } from "react";
import bg from '../../../assets/images/pages/auth/auth-bg.jpg';

const DaftarForm = () => {
    
    const [data, setData] = useState({
        fullname: "adasdas",
        birthdate: "",
        username: "",
        password: ""
    });

    const sendData = () => {
        fetch('https://dongengin.000webhostapp.com/api/auth/register', {
          method: 'POST',
          body: JSON.stringify ({
            fullname: data.fullname, // Use your own property name / key
            birthdate: data.birthdate,
            username: data.username,
            password: data.password,
          }),
        })
          .then((res) => res.json())
          .then((result) => setData(result.rows))
          .catch((err) => console.log('error'))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData();
    }
    
    function handleChange(evt) {
        const value = evt.target.value;
        setData({
            ...data,
            [evt.target.name]: value,
        });
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
                                value={data.fullname}
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="flex flex-col font-bold text-lg text-cPink mb-2 mt-4" htmlFor="confirmpassword">
                            Confirm Password
                            <input
                                className="w-full font-bold text-cBlack border-2 border-cPink rounded-full mt-2 py-3 px-6"
                                placeholder="Confirm Password"
                                type="password"
                                name="confirmpassword"
                                required
                            />
                        </label>
                        
                        <button className="w-min font-extrabold text-2xl text-cWhite bg-cPurple rounded-full py-3 px-24 mt-8 mb-16 mx-auto"
                        >Daftar
                        </button>
                    
                    </div>
                </div>
                <div className="w-2/4 fixed right-0">
                    <img className="" src={bg} alt="" />
                </div>
            </div>
        </form>
    )
}

export default DaftarForm;
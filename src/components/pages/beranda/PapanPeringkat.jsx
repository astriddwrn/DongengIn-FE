import React, { useState, useEffect } from 'react';

const PapanPeringkat = () => {

    const [pengguna, setPengguna] = useState([
        {
            username:"username123",
            points: 400,

        },
        {
            username:"username123",
            points: 200,
        },
        {
            username:"username123",
            points: 100,
        },
        {
            username:"username111",
            points: 700,
        },
        {
            username:"username123",
            points: 500,
        },
    ]);

    return(
        
        <div className="papanperingkat mt-40 w-10/12 my-0 mx-auto">
            <div className="text-4xl font-extrabold tracking-widest leading-relaxed mb-5">PAPAN PERINGKAT</div>
            <div className="text-xl font-semibold bg-cBlue text-cWhite tracking-widest leading-relaxed px-4 py-2 rounded-t-lg w-72 text-center">Pengguna Teraktif</div>
            <div className="w-full bg-cLightBlue p-8">
                {pengguna.sort((a,b) => a.points > b.points ? -1 : 1).map((d, index)=> {
                    return(
                    <div className="px-10 py-5 flex flex-row justify-between items-center bg-cWhite tracking-widest leading-relaxed mb-5 rounded-lg">
                        <div className={"rounded-full h-10 w-10  flex flex-row justify-center items-center font-semibold text-lg " + ((index===0) ? 'first' : (index===1) ? 'second' : (index===2) ? 'third' : '' )}>{index+1}</div>
                        <div className="w-9/12 font-bold text-xl">{d.username}</div>
                        <div className="font-semibold text-lg">{d.points} Poin</div>
                        <div onload={()=>console.log("test")}></div>
                    </div>
                    )}
                )}
            </div>
        </div>
    );
}

export default PapanPeringkat;
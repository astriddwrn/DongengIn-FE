import React from "react";

const ButtonFavorit = (props) => {
    /* console.log(props.isFavorit); */
    if (props.isFavorit === 1) {
        return <button className="font-extrabold text-2xl tracking-widest text-cWhite bg-cPink rounded-full mr-8 py-3 px-8">Hapus dari Favorit</button>;
    }
    else {
        return <button className="text-cPink font-extrabold text-2xl tracking-wide font-extrabold border-2 border-cPink rounded-full mr-8 py-3 px-8">Tambahkan Ke Favorit</button>;
    }
}

export default ButtonFavorit;
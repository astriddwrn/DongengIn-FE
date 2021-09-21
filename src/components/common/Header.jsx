import React from 'react';

import Logo from '../../assets/images/common/logo.svg';

const Header = () => {
    return (
      <>    
        <div className="navbar font-sans flex flex-row justify-between items-center px-20 py-5 fixed top-0 w-full">
            <div className="logo"><img className="h-5" src={Logo} alt="" /></div>
            <div className="menu-list flex flex-row justify-between w-5/12 items-center font-semibold text-lg">
                <div className="active">Beranda</div>
                <div className="">Kumpulan Dongeng</div>
                <div className="">Daftar</div>
                <div className="bg-cPink text-cWhite rounded-full px-5 py-1 font-bold">Masuk</div>
            </div>
        </div>
      </>
    );
};

export default Header;
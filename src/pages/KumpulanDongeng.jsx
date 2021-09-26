import React from 'react';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import TelusuriCerita from '../components/pages/kumpulan-dongeng/TelusuriCerita'

import BlueVector from '../assets/images/pages/kumpulan-dongeng/blue-vector.svg';



const KumpulanDongeng = () => {

    return (
        <React.Fragment>
            <Header currRoute='KumpulanDongeng' />
            <TelusuriCerita/>
            <img className="absolute top-0 z-10 w-96" src={BlueVector} alt="" />
            <Footer />
        </React.Fragment>
    );

};

export default KumpulanDongeng;
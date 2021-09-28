import React from 'react';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import MasukForm from '../components/pages/auth/MasukForm';

const Masuk = (props) => {

    return (
        <React.Fragment>
            <Header/>
            <MasukForm/>
        </React.Fragment>
    );

};

export default Masuk;
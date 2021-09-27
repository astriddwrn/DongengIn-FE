import React from 'react';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import DaftarForm from '../components/pages/auth/Daftar';

const Daftar = (props) => {

    return (
        <React.Fragment>
            <Header/>
            <DaftarForm/>
            {/* <Footer /> */}
        </React.Fragment>
    );

};

export default Daftar;
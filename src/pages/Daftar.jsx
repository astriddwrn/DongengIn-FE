import React from 'react';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import DaftarForm from '../components/pages/auth/DaftarForm';

const Daftar = (props) => {

    return (
        <React.Fragment>
            <Header user={props.user} currRoute={props.currRoute}/>
            <DaftarForm/>
        </React.Fragment>
    );

};

export default Daftar;
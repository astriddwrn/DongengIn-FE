import React from 'react';

import Header from '../components/common/Header';
import MasukForm from '../components/pages/auth/MasukForm';

const Masuk = (props) => {

    return (
        <React.Fragment>
            <Header user={props.user}/>
            <MasukForm/>
        </React.Fragment>
    );

};

export default Masuk;
import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import DaftarForm from '../components/pages/auth/DaftarForm';

const Daftar = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <React.Fragment>
            <Header user={props.user} currRoute={props.currRoute}/>
            <DaftarForm/>
        </React.Fragment>
    );

};

export default Daftar;
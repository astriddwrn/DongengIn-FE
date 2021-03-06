import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import DeskripsiCerita from '../components/pages/previewdongeng/DeskripsiCerita';
import RekomendasiCerita from '../components/pages/previewdongeng/RekomendasiCerita';

const PreviewDongeng = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <React.Fragment>
            <Header user={props.user} />
            <DeskripsiCerita story={props.story} user={props.user}/>
            <RekomendasiCerita />
            <Footer />
        </React.Fragment>
    );
};

export default PreviewDongeng;
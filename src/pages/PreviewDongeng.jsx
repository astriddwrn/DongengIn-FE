import React from 'react';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import DeskripsiCerita from '../components/pages/previewdongeng/DeskripsiCerita';
import RekomendasiCerita from '../components/pages/previewdongeng/RekomendasiCerita';

const PreviewDongeng = () => {

    return (
        <React.Fragment>
            <Header />
            <DeskripsiCerita />
            <RekomendasiCerita />
            <Footer />
        </React.Fragment>
    );

};

export default PreviewDongeng;
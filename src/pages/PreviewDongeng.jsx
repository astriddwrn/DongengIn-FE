import React from 'react';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import DeskripsiCerita from '../components/pages/previewdongeng/DeskripsiCerita';

const PreviewDongeng = () => {

    return (
        <React.Fragment>
            <Header />
            <DeskripsiCerita/>
            {/* <Footer /> */}
        </React.Fragment>
    );

};

export default PreviewDongeng;
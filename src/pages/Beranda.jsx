import React from 'react';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Hero from '../components/pages/beranda/Hero';
import CeritaTerfavorit from '../components/pages/beranda/CeritaTerfavorit';
import YukMasuk from '../components/pages/beranda/YukMasuk';
import PapanPeringkat from '../components/pages/beranda/PapanPeringkat';

const Beranda = () => {

    return (
        <React.Fragment>
            <Header />
            <Hero />
            <CeritaTerfavorit className="mt-96" />
            <YukMasuk />
            <PapanPeringkat />
            <Footer />
        </React.Fragment>
    );

};

export default Beranda;
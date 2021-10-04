import React, {useEffect} from 'react';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Hero from '../components/pages/beranda/Hero';
import CeritaTerfavorit from '../components/pages/beranda/CeritaTerfavorit';
import YukMasuk from '../components/pages/beranda/YukMasuk';
import PapanPeringkat from '../components/pages/beranda/PapanPeringkat';
import { useLocation } from 'react-router-dom';

const Beranda = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return (
        <React.Fragment>
            <Header currRoute={props.currRoute} user={props.user} />
            <Hero updateSearch={props.updateSearch} />
            <CeritaTerfavorit className="mt-96" />
            <div className={`${props.user.fullname? 'hidden' : 'block'}`}>
                <YukMasuk />
            </div>
            <PapanPeringkat />
            <Footer />
        </React.Fragment>
    );

};

export default Beranda;
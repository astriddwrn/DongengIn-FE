import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import TelusuriCerita from '../components/pages/kumpulan-dongeng/TelusuriCerita'
import BlueVector from '../assets/images/pages/kumpulan-dongeng/blue-vector.svg';

const KumpulanDongeng = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <React.Fragment>
            <Header currRoute='KumpulanDongeng' user={props.user}/>
            <TelusuriCerita 
                search={props.search}
                updateSearch={props.updateSearch} />
            <img className="absolute top-0 z-10 w-96" src={BlueVector} alt="" />
            <Footer />
        </React.Fragment>
    );

};

export default KumpulanDongeng;
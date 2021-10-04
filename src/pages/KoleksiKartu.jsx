import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import Sidebar from '../components/common/Sidebar'
import BeliModal from '../components/pages/dashboard/BeliModal';
import KoleksiKartus from '../components/pages/dashboard/KoleksiKartus'

const KoleksiKartu = (props) => {
  const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

  return (
    <Sidebar currRoute={props.currRoute} user={props.user}>
      <KoleksiKartus user={props.user} />
    </Sidebar>
  )
}

export default KoleksiKartu;

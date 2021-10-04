import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar'
import Profil from '../components/pages/dashboard/Profil'

const Dashboard = (props) => {
    const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
    
    return (
        <Sidebar currRoute={props.currRoute} user={props.user}>
            <Profil user={props.user}/>
        </Sidebar>
    )
}

export default Dashboard;

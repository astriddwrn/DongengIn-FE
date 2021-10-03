import Sidebar from '../components/common/Sidebar'
import Profil from '../components/pages/dashboard/Profil'

const Dashboard = (props) => {
  return (
    <Sidebar currRoute={props.currRoute} user={props.user}>
      <Profil user={props.user}/>
    </Sidebar>
  )
}

export default Dashboard;

import Sidebar from '../components/common/Sidebar'
import Home from '../components/pages/dashboard/Home'

const Profil = (props) => {
  return (
    <Sidebar>
      <Home user={props.user}/>
    </Sidebar>
  )
}

export default Profil

import Sidebar from '../components/common/Sidebar'
import KoleksiKartus from '../components/pages/dashboard/KoleksiKartus'

const KoleksiKartu = (props) => {
  return (
    <Sidebar currRoute={props.currRoute} user={props.user}>
      <KoleksiKartus user={props.user}/>
    </Sidebar>
  )
}

export default KoleksiKartu;

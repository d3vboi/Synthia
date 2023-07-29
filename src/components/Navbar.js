import { Link } from "react-router-dom"
import './Navbar.css'
import PfpLogo from '../imgs/user.png'



const Navbar =()=>{
      return (
            <div class="navbar">
                  <Link className="link" to="/">Synthia AI</Link>
                  <Link className="link" id="profile"><img src={PfpLogo} alt="Profile Picture"/></Link>
            </div>
      )
}
export default Navbar;
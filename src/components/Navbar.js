import { Link } from "react-router-dom"
import './Navbar.css'
import PfpLogo from '../imgs/user.png'


const Navbar =()=>{
      return (
            <div className="navbar">
                  <Link className="link" to="/">Synthia AI</Link>
                  <Link className="link" to="/Chat">Chatbot</Link>
                  <Link className="link" id="profile"><img src={PfpLogo} alt="Profile"/></Link>
            </div>
      )
}
export default Navbar;
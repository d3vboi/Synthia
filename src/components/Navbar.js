import { Link } from "react-router-dom"
import './Navbar.css'
import PfpLogo from '../imgs/user.png'


const Navbar =()=>{
      return (
            <div className="navbar">
                  <Link className="link" to="/">Synthia AI</Link>
                  <Link className="link" to="/Chat">Chatbot</Link>
                  <Link className="link" id="profile"><div class="profileDropdown">
                  <img src={PfpLogo} alt="Profile"/><div class="profileDropdown-content"><p>Hello World!</p></div></div></Link>
            </div>
      )
}
export default Navbar;
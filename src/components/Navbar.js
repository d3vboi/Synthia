import { Link } from "react-router-dom"
import './Navbar.css'
const Navbar =()=>{
      return (
            <div class="navbar">
                  <Link className="link" to="/">Synthia AI</Link>
                  <Link style={{float:'right'}} className="link" id="profile">Acc</Link>
            </div>
      )
}
export default Navbar;
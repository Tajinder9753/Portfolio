//Layout.jsx Tajinder Nijjar, 301059291, Sept 22nd 2024
import { Link } from 'react-router-dom';
import './Layout.css';
import logo from '../assets/logo2.png';
export default function Layout() {
    return (
        <>
        {/* creates navigation bar at top of page with links to all pages */}
        <nav className = "navbar">
            <img src = {logo} alt ='logo' className = 'logo'/>
            
            <div className = "navMenu">
                <Link className = "navMenuItem" to= "/">Home</Link> 
                <Link className = "navMenuItem" to= "/About">About</Link> 
                <Link className = "navMenuItem" to= "/Project">Project</Link> 
                <Link className = "navMenuItem" to= "/Services">Services</Link> 
                <Link className = "navMenuItem" to= "/Contact">Contact</Link>
            </div>
        </nav>
        <hr />
        </>
    );
}
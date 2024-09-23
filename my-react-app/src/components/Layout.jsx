//Layout.jsx Tajinder Nijjar, 301059291, Sept 22nd 2024
import { Link } from 'react-router-dom';
import './Layout.css';
export default function Layout() {
    return (
        <>
        <nav className = "navbar">
            <h1>Tajinder's Portfolio</h1> 
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
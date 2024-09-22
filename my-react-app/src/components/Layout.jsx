import { Link } from 'react-router-dom';
//Layout.jsx Tajinder Nijjar, 301059291, Sept 22nd 2024
export default function Layout() {
    return (
        <>
        <h1>My Portfolio</h1>
        <nav>
            <Link to= "/">Home</Link> |
            <Link to= "/About">About</Link> |
            <Link to= "/Project">Project</Link> |
            <Link to= "/Services">Services</Link> |
            <Link to= "/Contact">Contact</Link>
        </nav>
        <br/> <br/>
        <hr />
        </>
    );
}
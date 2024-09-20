import { Link } from 'react-router-dom';
export default function Layout() {
    return (
        <>
        <h1>My Portfolio</h1>
        <nav>
            <Link to= "/">Home</Link>
        </nav>
        <br/>
        <hr />
        </>
    );
}
import { Route, Routes} from 'react-router-dom';
import Home from './src/components/Home';
import Layout from './src/components/Layout';
import About from './src/About';
import Contact from './src/Contact';
import Project from './src/Project';
import Services from './src/Services';
//MainRouter.jsx Tajinder Nijjar, 301059291, Sept 22nd 2024
const MainRouter = () => {
    return (
        <div>
            <Layout/>
            <Routes>
                <Route exact path="/" element = {<Home />}/>
                <Route exact path="/About" element={<About />}/>
                <Route exact path="/Project" element={<Project />}/>
                <Route exact path="/Services" element={<Services />}/>
                <Route exact path="/Contact" element={<Contact />}/>
            </Routes>
        </div>
    )
}
export default MainRouter;
import { Route, Routes} from 'react-router-dom';
import Home from './src/components/Home';
import Layout from './src/components/Layout';

const MainRouter = () => {
    return (
        <div>
            <Layout/>
            <Routes>
                <Route exact path="/" element = {<Home />}/>
            </Routes>
        </div>
    )
}
export default MainRouter;
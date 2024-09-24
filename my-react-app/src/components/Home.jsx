    //Home.jsx Tajinder Nijjar, 301059291, Sept 22nd 2024
    import '../Home.css';
    import { Link } from 'react-router-dom';
    import bg from '../assets/homeImage.png';
const Home = () => {
    return <>
    <section id = 'intro'>
        <div id = 'introContent'>
            <span className = 'hello'>Hello,</span> <br/>
            <span>I'm <span className = "introName">Tajinder Nijjar</span>
                <br/> Game Programming Student
            </span>
            <p className = 'para'>I am a skilled software engineering student with skills 
                in multiple areas including website design.
            </p>
            <Link to= "/About"><button className = 'btn'>About</button></Link> 
        </div>
        <img src={bg} alt ='profile' className = 'profile'/>
    </section>
        
    </> 
};

export default Home;
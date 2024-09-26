//Services.jsx Tajinder Nijjar, 301059291, Sept 22nd 2024
import './services.css';
import service1 from './assets/services1.png';
import service2 from './assets/services2.png';
import service3 from './assets/services3.png';
export default function Services() {
    return (
        <>
            <section className = 'services'>
                <h2 id = 'serviceTitle'>Services Offered:</h2>
                <ul className = 'serviceList'>
                    <li id = 'serviceItem'>Object Oriented Programming (C#, JavaScript, Java)</li>
                    <li id = 'serviceItem'>General Programming</li>
                    <li id = 'serviceItem'>Web Development</li>
                    <li id = 'serviceItem'>Website Design</li>
                    <li id = 'serviceItem'>Game Programming</li>
                    <li id = 'serviceItem'>Game Development</li>
                </ul>
                <div className = 'pictures'>
                    <img src = {service1} alt = "OOP image" id = 'serviceImages'></img>
                    <img src = {service2} alt = "Game Dev image" id = 'serviceImages'></img>
                    <img src = {service3} alt = "Web dev image" id = 'serviceImages'></img>
                </div>
            </section>
        </>
    );
}
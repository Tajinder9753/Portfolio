//Project.jsx Tajinder Nijjar, 301059291, Sept 22nd 2024
import './Project.css';
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';
import project3 from './assets/project3.png';
export default function Project() {
    return (
        <>
            <section id = 'project'>
                <h2 className = 'projectTitle'>My Projects</h2>
                <span className = 'projectDescription'>I take pride in paying attention to the smallest details.
                    I am excited to showcase a few of my projects, demonstrating my varied skillset and proficiencies.
                </span>
                <div className="projectImgs">
                    <img src= {project1} alt="Pong3D game" className="ImgProject" />
                    <img src= {project2} alt="Bug catcher web game" className="ImgProject" />
                    <img src= {project3} alt="JQuery slideshow" className="ImgProject" />
                </div>
            </section>
        </>
    );
}
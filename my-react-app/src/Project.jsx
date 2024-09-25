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
                    <h2 className = 'projectTitle'>Project 1: Pong3D</h2>
                    <img src= {project1} alt="Pong3D game" className="ImgProject" />
                    <p>This is a project I developed using the Unity game engine. It is a 3D verison of the classic Pong3D
                        game. It is meant to be played with 2 players, one controlling the blue paddle and the other controlling
                        the red paddle. Players have an option to select a difficulty setting which affects the speed of the game.
                        <br/> <br/> <br/> <br/>
                    </p>
                    <h2 className = 'projectTitle'>Project 2: Bug Game</h2>
                    <img src= {project2} alt="Bug catcher web game" className="ImgProject" />
                    <p>This is a project I developed using JavaScript. It is a simple bug smasher game in which the player clicks on the bug 
                        on the screen to "smash" it, increasing the score. The bug moves around the screen in an attempt to evade the player.
                        Each time a bug is hit, the speed of the bug is increased. The page dynamically updates the score for the user. It also
                        includes a reset score button that resets the score and the speed, and a reset speed button which resets the speed but not
                        the score.
                        <br/> <br/> <br/> <br/>
                    </p>
                    <h2 className = 'projectTitle'>Project 3: JQuery Slideshow</h2>
                    <img src= {project3} alt="JQuery slideshow" className="ImgProject" />
                    <p>This is a project I developed using JavaScript and JQuery. It is a simple slideshow with 12 images. The user can click
                        the left and right arrows to move through the slideshow. In addition, the user can hit the play button below the slideshow 
                        which will start the slideshow. The images will then cycle through remaining on screen for a few seconds each. The user can 
                        hit the button again to pause the slideshow. 
                        <br/> <br/> <br/> <br/>
                    </p>
            </section>
        </>
    );
}
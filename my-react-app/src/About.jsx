//About.jsx Tajinder Nijjar, 301059291, Sept 22nd 2024
import '../src/About.css';
import resume from './assets/Resume.pdf';
export default function About() {
    return (
        <>
           <section className ='about'>
                <h1>About Me</h1>
                <p>My name is Tajinder Nijjar, I am a second year software engineering student at Centennial College with
                    a specialization in game programming. I have a strong understanding of object oriented programming and
                    I am proficient in multiple programming languages such as c# JavaScript, HTML, CSS and Java. I have experience 
                    using industry tools such as Visual Studio, Unity, Git, MS Office and MS Visio.
                </p>
                <h2>Interests</h2>
                <p>Some of my interests include, playing video games, watching movies, reading books, cooking, baking 
                    watching sports, mainly basketball and hockey and game development.
                </p>
                <button className = 'resumeBtn'><a href = {resume}>Resume</a></button>
           </section>
        </>
    );
}
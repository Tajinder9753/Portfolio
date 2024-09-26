//Contact.jsx Tajinder Nijjar, 301059291, Sept 22nd 2024
import './Contact.css';
export default function Contact() {
    return (
        <>
            <section className = 'contactPage'>
                <h1 id = 'contactTitle'>Contact Me</h1>
                <span className="contactDescription">Please fill out the form below to discuss
                    any work opportunities.
                </span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder='First Name'/>
                    <input type="text" className="name" placeholder='Last Name'/>
                    <input type="email" className="email" placeholder='Email'/>
                    <input type = 'tel' className = 'tele' placeholder = 'Phone Number'/>
                    <textarea className = 'message' name="message" rows = '5' placeholder='Your Message'></textarea>
                    <button type = 'submit' value = 'Send' className = 'submitButton'>Submit</button>
                </form>
                <div className="contactInfo">
                    <h2>Email: tnijjar2@my.centennialcollege.ca</h2>
                    <h2>Phone: 647-617-4095</h2>
                </div>
            </section>
        </>
    );
}
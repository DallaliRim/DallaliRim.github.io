import Type from "../home/Type";
import './contact.css';
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiGitlab } from "react-icons/fi";

function ContactPage() {
    let introduction = ["Contact Me !"]
    return (
        <div className="Contact">
            <section className="contact">
                <Type text={introduction} />
                <div className="contact-info">
                    <div className="ContactContent">
                        <a href="https://www.linkedin.com/in/rim-dallali-3a498620b" className="social">
                            <SiLinkedin className="social-logo" />
                            <p> LinkedIn </p>
                        </a>
                        <a className="social" href="/contact">
                            <SiGithub className="social-logo" />
                            <p> GitHub </p>
                        </a>
                        <a className="social" href="/contact">
                            <FiGitlab className="social-logo" />
                            <p> GitLab </p>
                        </a>
                    </div>
                    <div className="contact-form">
                        <input></input>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default ContactPage;

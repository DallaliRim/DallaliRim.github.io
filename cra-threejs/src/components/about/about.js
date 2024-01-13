import Type from "../home/Type";
import "./about.css";

function AboutPage() {
    let construction = "This page is still under construction."
    return (
        <div className="about">
            <img className="avatar-holder" src="/images/avatar.png" alt="avatar"></img>
            <Type text={construction} />
        </div>
    );
}

export default AboutPage;

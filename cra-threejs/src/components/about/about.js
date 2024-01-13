import Type from "../home/Type";
import "./about.css";

function AboutPage() {
    let construction = "This page is still under construction."
    return (
        <div className="about">
            <Type text={construction} />
        </div>
    );
}

export default AboutPage;

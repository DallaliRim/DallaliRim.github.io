import "./about.css";

function AboutPage() {
    let introduction = "Collaborative and adaptable full-stack developer, I am skilled in a variety of programming languages and technologies. I thrive on contributing to impactful and creative software that elevates user experiences and efficiency. Beyond my technical background, my positive demeanor makes me a delightful team member. I bring not only a passion for continuous learning but also a knack for fostering a harmonious team culture. My ability to flourish in dynamic environments is complemented by my friendly and approachable nature, making me a great fit for any team and company culture."
    return (
        <div className="about">
            <img className="avatar-holder" src="/images/avatar.png" alt="avatar"></img>
            <p className="introduction">{introduction}</p>
        </div>
    );
}

export default AboutPage;

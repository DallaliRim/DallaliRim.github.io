import "./skills.css";
import projectsData from "../../data/projects.json"
import { useState } from "react";
import Stack from "./stack";
import { FiGitlab } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";

function SkillsPage() {
    const [projects, setProject] = useState(projectsData);

    return (
        <div className="skills">
            <div id="page" Style="padding-top: 109px;">
                <section className="home-wotd">
                    <div className="container">
                        <div className="home-wotd__wrapper">
                            <h1 className="home-wotd__date">KEYBOARD CHAMPIONS | Monke 2023</h1>
                            <div className="home-wotd__middle">
                                <figure className="home-wotd__thumbnail" Style="margin-bottom: -87px;">
                                    <a href="/projectsDetail"><img src="../../images/monke/monke_home_page.png" width="740" alt="Casa di Solare website" /></a>
                                </figure>
                                <div className="home-wotd__side">
                                    <img className="home-wotd__monogram" src="https://themonke.azurewebsites.net/static/media/logo-no-background.d5ef191a8016499ab5f5f330985c1de2.svg" alt="Website Of The Day monogrm" />
                                    <h3 className="home-wotd__title"><a href="/projectsDetail">Keyboard Champions</a></h3>
                                    <h4 className="home-wotd__subtitle"><a href="https://themonke.azurewebsites.net">Monke | 2023</a></h4>
                                    <span className="home-wotd__meta">
                                        Engaging typing game to play by yourself or to compete between friends. Allows you to test your skills using a variety of settings and stats and have them be available for browsing to logged-in users. Includes a Multiplayer feature that allows you to compete with friends in real time.
                                    </span>
                                </div>
                            </div>

                            <div className="home-wotd__scores">
                                <div className="home-wotd__scores__top">
                                    <div className="home-wotd__desc">
                                        <p><em> BLABLA D 1</em></p>
                                    </div>
                                    <div className="home-wotd__judges">
                                    </div>
                                </div>
                                <div className="home-wotd__scores__bottom">
                                    <ul className="vote__list completed">
                                        {projects[1].stack.map((stack, i) => {
                                            return <Stack stack={stack} />
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-projects">
                    <div className="container">
                        <h2><a href="/wotd-award-nominees" className="cust-btn arrow-icon">OTHER PROJECTS</a></h2>
                        <div className="home-projects__list projects__list">
                            {
                                projects.map((project, i) => {
                                    return <article className="single-project">
                                        <div>
                                            <div className="single-project__thumbnail">
                                                <img src={project.logo} alt="SkateAmerica website" />
                                                <div className="single-project__thumbnail__overlay">
                                                    <div className="single-project__meta">
                                                        <span className="sp__meta__category">{project.date}</span>
                                                        <span className="sp__meta__date">{project.description}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="single-project__title"><a href="/">{project.title}</a></h3>
                                            <div className="single-project__scores">
                                                {project.stack.map((stack, i) => {
                                                    return <span className="sp__single-score">{stack}</span>
                                                })}
                                            </div>
                                        </div>
                                    </article>
                                })
                            }

                        </div>
                        <div className="home-projects__more-button text-center">
                            <a href="https://gitlab.com/RimDallali" className="cust-btn arrow-icon">More</a>
                        </div>
                    </div>
                </section>

                <footer className="main light">
                    <div className="flex-grid">Rim Dallali</div>
                    <div className="flex-grid text-center mobile-top">
                        <ul className="social-icons">
                            <li><a href="https://www.linkedin.com/in/rim-dallali-3a498620b"><SiLinkedin className="social-logo" />LinkedIn</a></li>
                            <li><a href="https://github.com/DallaliRim"><SiGithub className="social-logo" /> GitHub</a></li>
                            <li><a href="https://gitlab.com/RimDallali"><FiGitlab className="social-logo" /> GitLab</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default SkillsPage;

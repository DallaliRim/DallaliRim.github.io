import { useEffect, useState } from 'react';
import './navbar.css';
import { SiDevdotto } from "react-icons/si";
import { IoCodeSlashOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    const [scrollTop, setScrollTop] = useState(50);
    const [classname, setClassname] = useState("nav");

    useEffect(() => {
        console.log(scrollTop);
        if (scrollTop > 50) {
            setClassname("nav affix");
        } else {
            setClassname("nav");
        }
    }, [scrollTop]);

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <nav className={classname}>
            <div className="container">
                <div className="logo">
                    <a href="./">
                        <IoCodeSlashOutline id="logo-code" className="logo-img" />
                        Rim Dallali
                        <SiDevdotto id="logo-dev" className="logo-img" />
                    </a>
                </div>
                <div className="spacer" />
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                        <li><NavLink className="navlink" to="/about">About</NavLink></li>
                        <li><NavLink className="navlink" to="./projects">Projects</NavLink></li>
                        <li><NavLink className="navlink" to="./skills">Skills</NavLink></li>
                        <li><NavLink className="navlink" to="./contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

import { useEffect, useState } from 'react';
import './navbar.css';
import { SiDevdotto } from "react-icons/si";
import { IoCodeSlashOutline } from "react-icons/io5";

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
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                        <li><a href="./">About</a></li>
                        <li><a href="./">Projects</a></li>
                        <li><a href="./">Skills</a></li>
                        <li><a href="./">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

import { useEffect } from 'react';
import './navbar.css';
import { SiDevdotto } from "react-icons/si";
import { IoCodeSlashOutline } from "react-icons/io5";

function NavBar() {
    useEffect(() => {

    }, [])

    return (
        <nav className="nav">
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
                <span className="navTrigger">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
    );
}

export default NavBar;

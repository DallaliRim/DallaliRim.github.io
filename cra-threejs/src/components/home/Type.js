import React from "react";
import Typewriter from "typewriter-effect";
import './Type.css';
import '../../fonts/code7x5/Code7X5Regular-ypBe.ttf';

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Hi, I am Rim Dallali, a Full-Stack Software Developer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
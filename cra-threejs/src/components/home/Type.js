import React from "react";
import Typewriter from "typewriter-effect";
import './Type.css';
import '../../fonts/code7x5/Code7X5Regular-ypBe.ttf';

function Type(props) {
    return (
        <Typewriter
            options={{
                strings: props.text,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
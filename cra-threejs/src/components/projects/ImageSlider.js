import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";

export const ImageSlider = (slides) => {
    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
    });

    const slidesImg = slides.slides.map((slide, index) => {
        return { "content": <img className="project-image" alt="a" src={slide} key={index} onClick={() => setState({ goToSlide: index })} /> }
    })

    slides.slides.map((slide, index) => {
        return { ...slide, onClick: () => setState({ goToSlide: index }) };
    });

    let xDown = null;
    let yDown = null;

    const getTouches = (evt) => {
        return (
            evt.touches || evt.originalEvent.touches // browser API
        );
    };

    const handleTouchStart = (evt) => {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    const handleTouchMove = (evt) => {
        if (!xDown || !yDown) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            /*most significant*/
            if (xDiff > 0) {
                /* left swipe */
                setState({ goToSlide: state.goToSlide + 1 });
            } else {
                /* right swipe */
                setState({ goToSlide: state.goToSlide - 1 });
            }
        } else {
            if (yDiff > 0) {
                /* up swipe */
            } else {
                /* down swipe */
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };

    return (
        <div
            style={{ width: "80%", height: "500px", margin: "0 auto" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <Carousel
                slides={slidesImg}
                goToSlide={state.goToSlide}
                offsetRadius={state.offsetRadius}
                showNavigation={state.showNavigation}
                animationConfig={state.config}
            />
            <div
                style={{
                    margin: "0 auto",
                    marginTop: "2rem",
                    width: "50%",
                    display: "flex",
                    justifyContent: "space-around"
                }}
            ></div>
        </div>
    );
};

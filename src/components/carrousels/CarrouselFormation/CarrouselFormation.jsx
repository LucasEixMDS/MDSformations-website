import { useRef, useState, useEffect } from 'react';
import "./CarrouselFormation.scss";
import data from "../../../json/CarrouselForm.json";

function CarrouselFormation() {
    const sliderRef = useRef(null);
    const progressBarRef = useRef(null);
    const [sliderGrabbed, setSliderGrabbed] = useState(false);

    useEffect(() => {
        const slider = sliderRef.current;
        const progressBar = progressBarRef.current;

        const handleScroll = () => {
            progressBar.style.width = `${getScrollPercentage()}%`;
        };

        const handleMouseDown = () => {
            setSliderGrabbed(true);
            slider.style.cursor = 'grabbing';
        };

        const handleMouseUp = () => {
            setSliderGrabbed(false);
            slider.style.cursor = 'grab';
        };

        const handleMouseLeave = () => {
            setSliderGrabbed(false);
        };

        const handleMouseMove = (e) => {
            if (sliderGrabbed) {
                slider.parentElement.scrollLeft -= e.movementX;
            }
        };

        const handleWheel = (e) => {
            e.preventDefault();
            slider.parentElement.scrollLeft += e.deltaY;
        };

        function getScrollPercentage() {
            return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) * 100);
        }

        slider.parentElement.addEventListener('scroll', handleScroll);
        slider.addEventListener('mousedown', handleMouseDown);
        slider.addEventListener('mouseup', handleMouseUp);
        slider.addEventListener('mouseleave', handleMouseLeave);
        slider.addEventListener('mousemove', handleMouseMove);
        slider.addEventListener('wheel', handleWheel);

        return () => {
            slider.parentElement.removeEventListener('scroll', handleScroll);
            slider.removeEventListener('mousedown', handleMouseDown);
            slider.removeEventListener('mouseup', handleMouseUp);
            slider.removeEventListener('mouseleave', handleMouseLeave);
            slider.removeEventListener('mousemove', handleMouseMove);
            slider.removeEventListener('wheel', handleWheel);
        };
    }, [sliderGrabbed]); // Les gestionnaires d'événements seront remis en place si `sliderGrabbed` change


    return (
        
        <div className="slider-formation">
                <div className="slider-formation-outer">
                    <div className="slider-formation-inner" ref={sliderRef}>
                        {data.map(item => (   

                        <div className="items" key={item.id} style={{ backgroundImage: `url(${item.photo})` }} >
                                <div className="topContainer">
                                    <div className="icon">
                                        <p>{item.icon}</p>
                                    </div>
                                </div>
                                <div className="midContainer">
                                    <h2>{item.text}</h2>
                                </div>
                                <div className="bottomContainer">
                                    <div className="buttons">
                                        <button style={{ color: item.buttonColor }}>En savoir +</button>
                                    </div>
                                </div>
                        </div>
                       
                            ))}
                </div>
            </div>
            <div className="progress-bar-formation-outer">
                    <div className="prog-bar-formation-inner" ref={progressBarRef}></div>
                </div>
            </div>
        
    );
}

export default CarrouselFormation;
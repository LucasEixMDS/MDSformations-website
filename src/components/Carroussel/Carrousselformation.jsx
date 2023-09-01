import { useRef, useState, useEffect } from 'react';
import bouche from "../../assets/bouche.svg";
import ongle from "../../assets/ongle.svg";
import massage from "../../assets/massage.svg"

function SliderComponent() {
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
                        <div className="items">
                            <div className="bouche">
                                <img src={bouche} alt="" />
                            </div>
                                <h2>Maquillage permanent </h2>
                            <div className="buttons">
                                <button>En savoir +</button>
                            </div>
                        </div>
                        <div className="items">
                            <div className="ongle">
                                <img src={ongle} alt="" />
                            </div>
                                <h2>Prothésie ongulaire </h2>
                            <div className="buttons">
                                <button>En savoir +</button>
                            </div>
                        </div>
                        <div className="items">
                            <div className="massage">
                                <img src={massage} alt="" />
                            </div>
                                <h2>Praticien en massage </h2>
                            <div className="buttons">
                                <button>En savoir +</button>
                            </div>
                        </div>
                </div>
            </div>
            <div className="progress-bar-formation-outer">
                    <div className="prog-bar-formation-inner" ref={progressBarRef}></div>
                </div>
            </div>
        
    );
}

const Home = () => {
    return (
        <SliderComponent />
    );
};

export default Home;
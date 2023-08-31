
import { useRef, useState, useEffect } from 'react';
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
        <div className="slider-wrap">
            <div className="slider-outer">
                <div className="slider-inner" ref={sliderRef}>
                <div className="item">
                    <h3>Financement jusqu’à 100%</h3>
                    <p>Différentes solutions de financement possible...</p>
                    <button>En savoir +</button>
                </div>
                <div className="item">
                    <h3>Plateforme en ligne gratuite</h3>
                    <p>pour compléter vos connaissances à votre rythme</p>
                    <button>En savoir +</button>
                </div>
                <div className="item">
                    <h3>Dormez sur place</h3>
                    <p>Une expérience de formation tout-en-un, sans soucis logistiques</p>
                    <button>En savoir +</button>
                </div>
                <div className="item">
                    <h3>Diplôme d'État Reconnu</h3>
                    <p>Garantissant la valeur et la crédibilité de votre formation</p>
                    <button>En savoir +</button>
                </div>
                <div className="item">
                    <h3>Une équipe dédiée et diplômée</h3>
                    <p>nos formateurs sont diplômés et expert de leurs domaine</p>
                    <button>En savoir +</button>
                </div>
                <div className="item">
                    <h3>Pratique dès le premier jour</h3>
                    <p>Expérience immersive et enrichissante</p>
                    <button>En savoir +</button>
                </div>
            </div>
        </div>
        <div className="progress-bar-outer">
                <div className="prog-bar-inner" ref={progressBarRef}></div>
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
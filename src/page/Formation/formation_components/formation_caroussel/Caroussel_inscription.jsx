import './caroussel_inscription.scss';
import { useRef, useState, useEffect } from 'react';
import rawData from "../../../../json/CarousselInscription.json";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function CarrouselInscription({ filterValues = [], formation }) {
    const sliderRef = useRef(null);
    const progressBarRef = useRef(null);
    const [sliderGrabbed, setSliderGrabbed] = useState(false);
    

    const itemsToDisplay = filterValues.length > 0 
    ? rawData.filter(item => item.idElement.some(id => filterValues.includes(id)))
    : rawData;

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
    }, [sliderGrabbed]);

    return (
        <div className="slider-inscription">
            <div className="slider-inscription-outer">
                <div className="slider-inscription-inner" ref={sliderRef}>
                {itemsToDisplay.map(item => (
                <Link to={item.articleLink} key={item.id}>
                    <div className="items">
                        <div className="topContainer">
                            <div className="icon">
                                <h2>{item.titre}</h2>
                                <h3 className='date'>{item.text}</h3>
                            </div>
                        </div>
                        
                        <div className="bottomContainer">
                            <div className="buttons">
                                <button style={{ background: formation.colorFormation}}>En savoir +</button>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
                </div>
            </div>
            <div className="progress-bar-inscription-outer">
                <div className="prog-bar-inscription-inner" ref={progressBarRef} style={{ backgroundColor: formation.colorFormation}}></div>
            </div>
        </div>
    );
}

CarrouselInscription.propTypes = {
    filterValues: PropTypes.arrayOf(PropTypes.string),
    formation: PropTypes.object
};

export default CarrouselInscription;

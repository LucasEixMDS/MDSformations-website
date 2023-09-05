import './CarrouselArticle.scss';
import { useRef, useState, useEffect } from 'react';
import rawData from "../../../json/CarrouselActu.json";
import PropTypes from 'prop-types';

function CarrouselFormation({ filterValues = [] }) {
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
        <div className="slider-formation">
            <div className="slider-formation-outer">
                <div className="slider-formation-inner" ref={sliderRef}>
                    {itemsToDisplay.map(item => (
                        <div className="items" key={item.id} style={{ backgroundImage: `url(${item.photo})` }}>
                            <div className="topContainer">
                                <div className="icon">
                                    <h2>{item.text}</h2>
                                    <h2 className='date'>{item.date}</h2>
                                </div>
                            </div>
                            
                            <div className="bottomContainer">
                                <div className="buttons">
                                    <button style={{ color: item.buttonColor }}>Lire l'article</button>
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

CarrouselFormation.propTypes = {
    filterValues: PropTypes.arrayOf(PropTypes.string)
};

export default CarrouselFormation;

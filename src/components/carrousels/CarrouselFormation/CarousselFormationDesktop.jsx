import { useRef, useState, useEffect } from 'react';
import "./CarrouselFormation.scss";
import rawData from "../../../json/CarrouselForm.json";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CarrouselFormation({ filterValues = [] }) {
    const sliderRef = useRef(null);
    const progressBarRef = useRef(null);
    const [sliderGrabbed, setSliderGrabbed] = useState(false);
    const progressBarDesktopRef = useRef(null);

    const itemsToDisplay = filterValues.length > 0 
    ? rawData.filter(item => item.idElement.some(id => filterValues.includes(id)))
    : rawData;

    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    useEffect(() => {
        if (isMobile()) {
            return;
        }
    
        const progressBarDesktop = progressBarDesktopRef.current;
        let isDragging = false;
    
        const handleDesktopProgressBarMouseDown = () => {
            isDragging = true;
        };
    
        const handleDesktopProgressBarMouseMove = (e) => {
            if (!isDragging) return;
            const totalWidth = progressBarDesktop.parentElement.offsetWidth;
            const newX = e.clientX - progressBarDesktop.getBoundingClientRect().left;
            const newScrollLeft = newX / totalWidth * (sliderRef.current.parentElement.scrollWidth - sliderRef.current.parentElement.clientWidth);
            sliderRef.current.parentElement.scrollLeft = newScrollLeft;
        };
    
        const handleDesktopProgressBarMouseUp = () => {
            isDragging = false;
        };
    
        progressBarDesktop.addEventListener('mousedown', handleDesktopProgressBarMouseDown);
        document.addEventListener('mousemove', handleDesktopProgressBarMouseMove);
        document.addEventListener('mouseup', handleDesktopProgressBarMouseUp);
    
        return () => {
            progressBarDesktop.removeEventListener('mousedown', handleDesktopProgressBarMouseDown);
            document.removeEventListener('mousemove', handleDesktopProgressBarMouseMove);
            document.removeEventListener('mouseup', handleDesktopProgressBarMouseUp);
        };
    }, [/* dépendances */]);
    

    useEffect(() => {
        const slider = sliderRef.current;
        const progressBar = progressBarRef.current;
    
        const handleScroll = () => {
            const scrollPercentage = getScrollPercentage();
        
            if (isMobile()) {
                progressBar.style.width = `${scrollPercentage}%`;
            } else {
                // Sur PC, ajustez la largeur de la barre de progression pour refléter la position de défilement
                progressBar.style.width = `calc(${scrollPercentage}% * 0.9 + 10%)`; // Ajustez cette formule selon vos besoins
            }
        };

        
        function getScrollPercentage() {
            const scrollLeft = sliderRef.current.parentElement.scrollLeft;
            const scrollWidth = sliderRef.current.parentElement.scrollWidth - sliderRef.current.parentElement.clientWidth;
            return (scrollLeft / scrollWidth) * 100;
        }

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
            if (window.innerWidth > 1024) return; // Ne rien faire pour les écrans larges
            if (sliderGrabbed) {
                slider.parentElement.scrollLeft -= e.movementX;
            }
        };
        
        const handleWheel = (e) => {
            if (window.innerWidth > 1024) return; // Ne rien faire pour les écrans larges
            e.preventDefault();
            slider.parentElement.scrollLeft += e.deltaY;
        };
        


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
                    <Link to={`/${item.formationLink}`} key={item.id}>
                        <div className="items" style={{ backgroundImage: `url(${item.photo})` }}>
                            <div className="topContainer">
                                <div className="icon">
                                    <p><img src={item.icon} alt="" /></p>
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
                    </Link>
                ))}
                </div>
            </div>
            <div className="progress-bar-formation-outer">
    <div className="prog-bar-formation-inner" ref={progressBarRef}></div> {/* Barre mobile */}
    <div className="prog-bar-formation-inner-desktop" ref={progressBarDesktopRef}></div> {/* Barre desktop */}
</div>
        </div>
    );
}

CarrouselFormation.propTypes = {
    filterValues: PropTypes.arrayOf(PropTypes.string)
};

export default CarrouselFormation;

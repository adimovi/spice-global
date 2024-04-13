import React, { useState, useEffect } from 'react';
import './scroll.css';



const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Function to check if the user has scrolled down enough to show the button
    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // useEffect hook to add event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {isVisible && (
            
                   <img src="imgs/top.png" alt='' className="scroll-to-top-btn" onClick={scrollToTop} />
                
            )}
        </div>
    );
};

export default ScrollToTopButton;

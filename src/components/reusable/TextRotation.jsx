// File: TextSlider.jsx
import React, { useState, useEffect } from "react";

const TextSlider = () => {
    const words = ["Developer", "Engineer", "Thinker"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setPreviousIndex(currentIndex);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="flex flex-col items-center justify-center h-32">
            <div className="relative h-10 overflow-hidden">
                {words.map((word, index) => (
                    <div
                        key={index}
                        className={`text-3xl text-white font-medium transition-transform duration-700 ease-in-out
                            ${index === currentIndex
                                ? "relative translate-y-0 opacity-100"
                                : index === previousIndex
                                    ? "absolute -translate-y-full opacity-100"
                                    : "absolute translate-y-full opacity-0"
                            }`}
                    >
                        {word}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextSlider;

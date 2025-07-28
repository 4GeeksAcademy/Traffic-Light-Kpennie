// PURPOSE: Reusable traffic light component

import React, { useState } from 'react';

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    const handleLightClick = (selectedColor) => {
        setColor(selectedColor);
    };
    

    const cycleColors = () => {
        if (color === "red") {
            setColor("yellow");
        } else if (color === "yellow") {
            setColor("green");
        } else {
            setColor("red");
        }
    };

    return (
        <div className="traffic-light-container">
            <div className="traffic-top"></div>
            <div className="traffic-light">
            
                <div 
                    className={`light red ${color === "red" ? "selected" : ""}`}
                    onClick={() => handleLightClick("red")}
                ></div>
                
                <div 
                    className={`light yellow ${color === "yellow" ? "selected" : ""}`}
                    onClick={() => handleLightClick("yellow")}
                ></div>
    
                <div 
                    className={`light green ${color === "green" ? "selected" : ""}`}
                    onClick={() => handleLightClick("green")}
                ></div>
            </div>
            
            <button 
                className="cycle-button"
                onClick={cycleColors}
            >
                Next Color
            </button>
        </div>
    );
};

export default TrafficLight;
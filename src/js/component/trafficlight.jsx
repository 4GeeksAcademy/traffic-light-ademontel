import React, {useState} from "react";

const TrafficLight = () => {
    const [colorSelected, setColorSelected] = useState("red");
    const [colorList, setColorList] = useState(['red','yellow','green']);
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleColor = () => {
        const nextIndex = (currentIndex + 1) % colorList.length;
        setColorSelected(colorList[nextIndex]); 
        setCurrentIndex(nextIndex);
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="bg-dark" style={{width:"30px", height:"200px"}}></div>
            <div className="bg-dark rounded-5 justify-content-evenly flex-column d-flex align-items-center py-2" style={{width:"200px", minHeight:"600px"}}>
                {
                    colorList.map( (color, indexColor) => {
                        return (
                            <div key={indexColor} onClick={() => {
                                setColorSelected(color);
                                setCurrentIndex(indexColor);
                                }} 
                                className={"rounded-circle " + (colorSelected==color ? "onLight":"")} 
                                style={{width:"130px", height:"130px", backgroundColor: color}}></div>
                        );
                    })
                }
            </div>
            <button className="btn btn-success mt-3" onClick={() => {
                if (colorList.length < 4) {
                    setColorList([...colorList, 'purple' ])
                }
            }}> Generate
            </button>
            <button className="btn btn-success mt-3" onClick={toggleColor}> Alternate
            </button>
        </div>
    );
} 

export default TrafficLight;

import './Card.css';

function Card() {
    const handleMouseMove = e => {
        e.target.style.setProperty("--mouse-x", `${e.nativeEvent.offsetX}px`);
        e.target.style.setProperty("--mouse-y", `${e.nativeEvent.offsetY}px`);
    }

    return (
        <div className="card" onMouseMove={handleMouseMove}></div>
    )
};

export default Card;
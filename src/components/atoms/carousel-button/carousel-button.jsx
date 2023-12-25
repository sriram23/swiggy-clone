import LEFT_BUTTON from "../../../../assets/carousel-arrow-left.png"
import RIGHT_BUTTON from "../../../../assets/carousel-arrow-right.png"

import './carousel-button.scss'

const CarouselButton = (props) => {
    return (
        <div className="carousel-button-container">
            <button className="carousel-buttons" onClick={props.onLeftClick} disabled={props.disabledLeft}><img src={LEFT_BUTTON} alt="left button" /></button>
            <button className="carousel-buttons" onClick={props.onRightClick} disabled={props.disabledRight}><img src={RIGHT_BUTTON} alt="right button" /></button>
        </div>
    )
}

export default CarouselButton
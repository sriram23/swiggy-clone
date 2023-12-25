import './food-items-card.scss'
const FoodItemsCard = ({image, link}) => {
    return (
        <div className="food-items-card-container">
            <a className="food-items-link" href={link}>
                <img src={image} alt="food items" />
            </a>
        </div>
    )
}

export default FoodItemsCard
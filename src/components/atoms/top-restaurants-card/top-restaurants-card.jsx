import RATING from "../../../../assets/rating.png";
import "./top-restaurants-card.scss";
const TopRestaurantsCard = ({
  image,
  name,
  rating,
  time,
  cuisines,
  location,
  header,
  isOpen,
  onCardClick
}) => {
  return (
    <div className="top-restaurant-card-container" onClick={onCardClick}>
      <figure className="restaurant-image">
        <img src={image} alt="Restaurant Image" style={{filter: !isOpen && "grayscale(100%)"}}/>
        <h3 className="header">{header}</h3>
        <div className="shadow"></div>
      </figure>
      <div className="text-container">
        <h2 className="restaurant-name">{name}</h2>
        <div className="rating-container">
            <figure className="rating-icon">
              <img src={RATING} alt="Rating" />
            </figure>
            {rating}
          <span className="splitter">{"\u2B24"}</span>
          <div className="time">{time}</div>
        </div>
        <div className="cuisines">{cuisines.join(", ")}</div>
        <div className="location">{location}</div>
      </div>
    </div>
  );
};

export default TopRestaurantsCard;

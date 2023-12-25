import TOP_RESTAURANTS from "../../../static/top-restaurants.json";
import CarouselButton from "../../atoms/carousel-button/carousel-button";
import TopRestaurantsCard from "../../atoms/top-restaurants-card/top-restaurants-card";
import "./top-restaurants.scss";
const TopRestaurants = () => {
    const scrollLeft = () =>{
        const scrollElement = document.getElementById('restaurant-section');
        scrollElement.scrollLeft -= 1000;
    }
    const scrollRight = () =>{
        const scrollElement = document.getElementById('restaurant-section');
        scrollElement.scrollLeft += 1000;
    }
  return (
    <div className="top-restaurant-container">
      <div className="heading-container">
        <h2>{TOP_RESTAURANTS.title}</h2>
        <CarouselButton onLeftClick={scrollLeft} onRightClick={scrollRight}/>
      </div>
      <div id="restaurant-section" className="restaurant-section">
        {TOP_RESTAURANTS &&
          TOP_RESTAURANTS.gridElements &&
          TOP_RESTAURANTS.gridElements.infoWithStyle &&
          TOP_RESTAURANTS.gridElements.infoWithStyle.restaurants &&
          TOP_RESTAURANTS.gridElements.infoWithStyle.restaurants.map(
            (restaurant) => (
              <TopRestaurantsCard
                image={
                  "https://media-assets.swiggy.com/" +
                  restaurant.info.cloudinaryImageId
                }
                name={restaurant.info.name}
                rating={restaurant.info.avgRating}
                time={restaurant.info.sla.slaString}
                cuisines={restaurant.info.cuisines}
                location={restaurant.info.areaName}
                header={
                  restaurant.info.aggregatedDiscountInfoV3 &&
                  restaurant.info.aggregatedDiscountInfoV3.header +
                    " " +
                    restaurant.info.aggregatedDiscountInfoV3.subHeader
                }
                isOpen={restaurant.info.isOpen}
                onCardClick={() => window.open(restaurant.cta.link, '_self')}
              />
            )
          )}
      </div>
    </div>
  );
};

export default TopRestaurants;

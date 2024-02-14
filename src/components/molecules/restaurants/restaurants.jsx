import TopRestaurantsCard from '../../atoms/top-restaurants-card/top-restaurants-card';
import MASTER from '../../../static/master.json'
import './restaurants.scss'
import OptionsCard from '../../atoms/options-card/options-card';
const Restaurants = ({data}) => {
    const TITLE = MASTER.data.cards[3];
    const ACTIONS = MASTER.data.cards[4];
    const RESTAURANTS = MASTER.data.cards[5];
    return (<div>
        <div className='title-container'>
            <h2>{sessionStorage.getItem('locationTitle')}</h2>
        </div>
        <OptionsCard/>
        <div className="restaurant-container" id="restaurant-container">
        {
            data.gridElements.infoWithStyle.restaurants.map((restaurant) =>(
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
            ))
        }
        </div>
    </div>)
}

export default Restaurants;
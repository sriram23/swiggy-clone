import TopRestaurantsCard from '../../atoms/top-restaurants-card/top-restaurants-card';
import MASTER from '../../../static/master.json'
import './restaurants.scss'
const Restaurants = ({data}) => {
    const TITLE = MASTER.data.cards[3];
    const ACTIONS = MASTER.data.cards[4];
    const RESTAURANTS = MASTER.data.cards[5];
    return (<div>
        <div className='title-container'>
            <h2>{TITLE.card.card.title}</h2>
        </div>
        <div className="options-container">
            <select className='filter-select'>
                {ACTIONS.card.card.sortConfigs.map(config => <option value={config.key}>{config.title}</option>)}
            </select>
            <div className="face-list">
                {ACTIONS.card.card.facetList.map(facelist => <div className='face-chips'>{facelist.label}</div>)}
            </div>
        </div>
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
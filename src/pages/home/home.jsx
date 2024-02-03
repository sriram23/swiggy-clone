import { useNavigate } from "react-router-dom";
import InProgress from "../../components/atoms/in-progress/in-progress";
import BestOffer from "../../components/molecules/best-offer/best-offer";
import FoodItems from "../../components/molecules/food-items/food-items";
import Header from "../../components/molecules/header/header";
import TopRestaurants from "../../components/molecules/top-restaurants/top-restaurants";
import '../pages.scss'
import Restaurants from "../../components/molecules/restaurants/restaurants";

import MASTER from '../../static/master.json'
import NearMeLinks from "../../components/molecules/nearMeLinks/nearMeLinks";
import MobileDownload from "../../components/molecules/mobile-download/mobileDownload";
const Home = () => {
    const navigate = useNavigate()
    const onHomeClick = () => {
        navigate("/")
    }
    const onCartClick = () => {
        navigate("/checkout")
    }
    return <div className="home-container">
        <div className="header-section">
            <Header onLogoClick={onHomeClick} onCartClick={onCartClick}/>
        </div>
        <div className="main-section">
            {/* TODO: Need to work on props for the first 3 sections */}
            {MASTER.data.cards.map(card => {
                switch (card.card.card.id) {
                    case "topical_banner":
                        return <BestOffer/>
                    case "whats_on_your_mind":
                        return <FoodItems/>
                    case "top_brands_for_you":
                        return <TopRestaurants/>
                    case "restaurant_grid_listing":
                        return <Restaurants/>
                    case "restaurant_near_me_links":
                        return <NearMeLinks data={card.card.card} />
                    default:
                        // return <p>id: {card.card.card.id}</p>
                        return
                }
            })}
        </div>
        {MASTER.data.cards.map(card => {
            switch (card.card.card.id) {
                case "app_install_links":
                        return <MobileDownload data={card.card.card}/>
                default:
                        return
            }
        })}
        <InProgress/>
    </div>
}

export default Home;
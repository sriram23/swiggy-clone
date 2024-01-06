import { useNavigate } from "react-router-dom";
import InProgress from "../../components/atoms/in-progress/in-progress";
import BestOffer from "../../components/molecules/best-offer/best-offer";
import FoodItems from "../../components/molecules/food-items/food-items";
import Header from "../../components/molecules/header/header";
import TopRestaurants from "../../components/molecules/top-restaurants/top-restaurants";
import '../pages.scss'
import Restaurants from "../../components/molecules/restaurants/restaurants";

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
            <BestOffer/>
            <FoodItems/>
            <TopRestaurants/>
            <Restaurants/>
        </div>
        <InProgress/>
    </div>
}

export default Home;
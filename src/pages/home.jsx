import InProgress from "../components/atoms/in-progress/in-progress";
import BestOffer from "../components/molecules/best-offer/best-offer";
import FoodItems from "../components/molecules/food-items/food-items";
import Header from "../components/molecules/header/header";
import TopRestaurants from "../components/molecules/top-restaurants/top-restaurants";
import './home.scss'

const Home = () => {
    return <div className="home-container">
        <div className="header-section">
            <Header/>
        </div>
        <div className="main-section">
            <BestOffer/>
            <FoodItems/>
            <TopRestaurants/>
        </div>
        <InProgress/>
    </div>
}

export default Home;
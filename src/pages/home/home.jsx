import { useState, useEffect } from "react";
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
import { useEffect } from "react";
import axios from "axios";
import Footer from "../../components/molecules/footer/footer";
const Home = () => {
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)
    const [data, setData] = useState()
    const navigate = useNavigate()
    const onHomeClick = () => {
        navigate("/")
    }
    const onCartClick = () => {
        navigate("/checkout")
    }
    useEffect(() => {
        fetchLocation()
    }, [])
    useEffect(() => {
        fetchData()
    },[lat, lon])
    const fetchData = async () => {
        const res = await axios.get('https://corsproxy.org/?' + encodeURIComponent(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`))
        setData(res.data)
    }
    const fetchLocation =  () => {
        try{
        navigator.geolocation.getCurrentPosition((position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
          return;
        });
      }
      catch(err) {
        console.error("Error fetching location: ", err)
        setLocationError(true)
      }
      };
    return <div className="home-container">
        <div className="header-section">
            <Header onLogoClick={onHomeClick} onCartClick={onCartClick} lat={lat} lon={lon}/>
        </div>
        <div className="main-section">
            {/* TODO: Need to work on props for the first 3 sections */}
            {data && data.data && data.data.cards.map(card => {
                switch (card.card.card.id) {
                    case "topical_banner":
                        return <BestOffer key={card.card.card.id} data={card.card.card}/>
                    case "whats_on_your_mind":
                        return <FoodItems key={card.card.card.id} data={card.card.card}/>
                    case "top_brands_for_you":
                        return <TopRestaurants key={card.card.card.id} data={card.card.card}/>
                    case "restaurant_grid_listing":
                        return <Restaurants key={card.card.card.id} data={card.card.card}/>
                    case "restaurant_near_me_links":
                        return <NearMeLinks key={card.card.card.id} data={card.card.card} />
                    default:
                        // return <p>id: {card.card.card.id}</p>
                        return
                }
            })}
        </div>
        {MASTER.data.cards.map(card => {
            switch (card.card.card.id) {
                case "app_install_links":
                    return <MobileDownload key={card.card.card.id} data={card.card.card}/>

                case "footer_content":
                    return <Footer key={card.card.card.id} data={card.card.card}/>
                default:
                        return
            }
        })}
        {/* <InProgress/> */}
    </div>
}

export default Home;
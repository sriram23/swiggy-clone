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
import LocationUnservicable from "../../components/molecules/location-unservicable/location-unservicable";
const Home = () => {
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)
    const [data, setData] = useState()
    const [changeHeaderContent, setChangeHeaderContent] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const handleScroll = () => {
        console.log("Scroll", window.scrollY)
        if (window.scrollY > 1000) {
            setChangeHeaderContent(true)
        } else {
            setChangeHeaderContent(false)
        }
    }
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
        setIsLoading(true)
        const res = await axios.get('https://api.allorigins.win/get?url=' + encodeURIComponent(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`))
        setData(JSON.parse(res.data.contents))
        setIsLoading(false)
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
            <Header onLogoClick={onHomeClick} onCartClick={onCartClick} lat={lat} lon={lon} changeHeader={changeHeaderContent}/>
        </div>
        <div className="main-section">
            {isLoading && <h1>Loading...</h1>}
            {/* TODO: Need to work on props for the first 3 sections */}
            {!isLoading && data && data.data && data.data.cards && data.data.cards.map(card => {
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
                    case "popular_cities":
                        return <NearMeLinks key={card.card.card.id} data={card.card.card} />
                    case "swiggy_not_present":
                        return <LocationUnservicable key={card.card.card.id} data={card.card.card}/>
                    case "popular_restaurants_title":
                        sessionStorage.setItem("locationTitle", card.card.card.title)
                        console.log("Title: ", card.card && card.card.card && card.card.card.title)
                        return
                    case "app_install_links":
                    case "footer_content":
                        return
                    default:
                        if(card.card && card.card.card && card.card.card["@type"] === "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget")
                            sessionStorage.setItem("options", JSON.stringify(card.card.card))
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
    </div>
}

export default Home;
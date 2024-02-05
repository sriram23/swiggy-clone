import BestOfferCard from "../../atoms/best-offer-card/best-offer-card";
import BEST_OFFERS from "../../../static/best-offer.json";

import "./best-offer.scss";
import CarouselButton from "../../atoms/carousel-button/carousel-button";
const BestOffer = ({data}) => {
  const scrollLeft = () =>{
    const scrollElement = document.getElementById('best-offer-section');
    scrollElement.scrollLeft -= 1000;
}
const scrollRight = () =>{
    const scrollElement = document.getElementById('best-offer-section');
    scrollElement.scrollLeft += 1000;
}
  return (
    <div className="best-offer-container">
      <div className="title-container">
        <h2>{BEST_OFFERS.title}</h2>
        <CarouselButton onLeftClick={scrollLeft} onRightClick={scrollRight}/>
      </div>
      <div id="best-offer-section" className="best-offers-section">
        {BEST_OFFERS.data.map((bestOffer) => (
          <BestOfferCard
            image={"https://media-assets.swiggy.com/"+bestOffer.imageId}
            link={bestOffer.action.link}
          />
        ))}
      </div>
    </div>
  );
};

export default BestOffer;

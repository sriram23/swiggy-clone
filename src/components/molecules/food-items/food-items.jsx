import { useState, useEffect } from "react";
import FOOD_ITEMS from "../../../static/whats-on-your-mind.json";
import CarouselButton from "../../atoms/carousel-button/carousel-button";
import FoodItemsCard from "../../atoms/food-items-card/food-items-card";
import "./food-items.scss";
const FoodItems = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false)
  const scrollElement = document.getElementById("food-items-section");
  let scrollWidth = 0;
  let clientWidth = 0;
  if(scrollElement && scrollElement.scrollWidth && scrollElement.clientWidth){
    scrollWidth = scrollElement.scrollWidth;
    clientWidth = scrollElement.clientWidth;
  }
  useEffect(() => {
    // TODO: Fix the disable logic
    setDisableLeft(scrollPosition <= 1000);
    setDisableRight(scrollPosition + clientWidth >= scrollWidth)
  }, [scrollPosition, scrollWidth, clientWidth, scrollElement, setScrollPosition])
  const scrollLeft =  () => {
    scrollElement.scrollLeft -= 1000;
    setScrollPosition(scrollElement.scrollLeft);
  };
  const scrollRight = () => {
    scrollElement.scrollLeft += 1000;
    setScrollPosition(scrollElement.scrollLeft);
  };
  return (
    <div className="food-items-container">
      <div className="title-container">
        <h2>{FOOD_ITEMS.title}</h2>
        <CarouselButton
          onLeftClick={scrollLeft}
          onRightClick={scrollRight}
        //   TODO: Need to fix the disable logic
        //   disabledLeft={disableLeft}
        //   disabledRight={disableRight}
        />
      </div>
      <div id="food-items-section" className="food-items-section">
        {FOOD_ITEMS && FOOD_ITEMS.imageGridCards && FOOD_ITEMS.imageGridCards.info && FOOD_ITEMS.imageGridCards.info.map((fooditem) => (
          <FoodItemsCard
            key={fooditem.id}
            image={"http://media-assets.swiggy.com/" + fooditem.imageId}
            link={fooditem.action.link}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodItems;

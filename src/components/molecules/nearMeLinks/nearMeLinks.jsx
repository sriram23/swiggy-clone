import { useEffect, useState } from "react";
import "./nearMeLinks.scss";
const NearMeLinks = ({ data }) => {
  const [showMore, setShowMore] = useState(data.brands.length < 11);
  const [items, setItems] = useState(data.brands.slice(0, 11));
  const redirect = (link) => {
    window.open(link, "_self");
  };
  useEffect(() => {
    if (!showMore) {
      setItems(data.brands.slice(0, 11));
    } else {
      setItems(data.brands);
    }
  }, [data.brands, showMore]);
  return (
    <div className="near-me-links-container">
      <h2>{data.title}</h2>
      <div className="near-me-links-section">
        {items.map((brand, i) => (
          <div key={i} className="near-me-links-button-container">
            <button onClick={() => redirect(brand.link)}>{brand.text}</button>
          </div>
        ))}
        {!showMore && (
          <div className="show-more-button-container">
            <button onClick={() => setShowMore(true)}>Show More ⯆</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default NearMeLinks;

import './best-offer-card.scss'
const BestOfferCard = ({image, link}) => {
    return (<div className="best-offer-card">
        <a className="best-offer-link" href={link}>
            <figure className="best-offer-image">
                <img src={image} alt="best offer" />
            </figure>
        </a>
    </div>)
}

export default BestOfferCard;
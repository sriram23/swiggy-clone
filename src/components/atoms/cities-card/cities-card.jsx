import './cities-card.scss'
const CitiesCard = ({cities}) => {
    return (
        <section className='extended-footer'>
        <div className="cities-section">
            <h3>Other cities that we deliver:</h3>
            <div className="cities-container">
            {cities.map((city) => (
                <a href={city.link}>{city.text}</a>
            ))}
            </div>
        </div>
        </section>
    )
}
export default CitiesCard
import "./nearMeLinks.scss"
const NearMeLinks = ({data}) => {
    const redirect = (link) => {
        window.open(link, '_self')
    }
    return (
        <div className="near-me-links-container">
        <h2>{data.title}</h2>
        <div className="near-me-links-section">
        {data.brands.map(brand =>(
            <div className="near-me-links-button-container">
                <button onClick={() => redirect(brand.link)}>{brand.text}</button>
            </div>
        ))}
        </div>
        </div>
    )
}
export default NearMeLinks
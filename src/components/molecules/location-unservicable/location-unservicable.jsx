import "./location-unservicable.scss"
const  LocationUnservicable = ({data}) => {
    return (
        <div className="location-unservicable-container">
            <div className="unavailable-image">
                <img src={data.imageLink} alt=""/>
            </div>
            <div className="unavailable-text">
                <h3>{data.title}</h3>
                <p>We don’t have any services here till now. Try changing location.</p>
            </div>
            {/* {JSON.stringify(data)} */}
        </div>
    )
}
export default LocationUnservicable;
import "./mobileDownload.scss"
const MobileDownload = ({data}) => {
    return (
        <div className="mobile-download-container">
            <h2 className="download-title">{data.title}</h2>
            <button className="download-button" onClick={() => window.open(data.androidAppLink, "_blank")}>
                <img src={"https://media-assets.swiggy.com/"+data.androidAppImage} alt="Android app Download" />
            </button>
            <button className="download-button" onClick={() => window.open(data.iosAppLink, "_blank")}>
                <img src={"https://media-assets.swiggy.com/"+data.iosAppImage} alt="Android app Download" />
            </button>
        </div>
    )
}

export default MobileDownload
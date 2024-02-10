import {useState} from 'react'
import FOOTER_DATA from '../../../static/footer-data.json'
import WHITE_LOGO from '../../../../assets/white-logo.png'
import './footer.scss'
import CitiesCard from '../../atoms/cities-card/cities-card'
const Footer = ({data}) => {
    const [showMoreCities, setShowMoreCities] = useState(false)
    return (
        <section className='footer-section'>
        <div className="footer-container">
            <div id='col-1'>
                <div className='title-container'>
                    <img src={WHITE_LOGO} alt="Swiggy Logo"/>
                    <h2>{FOOTER_DATA.title}</h2>
                </div>
                <p>{FOOTER_DATA.copyright}</p>
            </div>
            <div id='col-2'>
                <h3>{FOOTER_DATA.data[0].title}</h3>
                <div className='footer-items'>
                    {FOOTER_DATA.data[0].links.map(link => {
                        return <a href={link.link}>{link.string}</a>
                    })}
                </div>
            </div>
            <div id='col-3'>
                <div>
                    <h3>{FOOTER_DATA.data[1].title}</h3>
                    <div className='footer-items'>
                    {FOOTER_DATA.data[1].links.map(link => {
                        return <a href={link.link}>{link.string}</a>
                    })}
                </div>
                </div>
                <div>
                    <h3>{FOOTER_DATA.data[2].title}</h3>
                    <div className='footer-items'>
                    {FOOTER_DATA.data[2].links.map(link => {
                        return <a href={link.link}>{link.string}</a>
                    })}
                </div>
                </div>
            </div>
            <div id='col-4'>
                <h3>We deliver to:</h3>
                <div className='footer-items'>
                    {data.cities.slice(0,6).map(city => (
                        <a href={city.link}>{city.text}</a>
                    ))}    
                </div>
                <div className='more-cities' onClick={() => setShowMoreCities(!showMoreCities)}>
                    {data.cities.length - 6} cities <span>{!showMoreCities ?'\u23F7':'\u23F6'}</span>
                </div>
            </div>
        </div>
        {showMoreCities && <CitiesCard cities={data.cities.slice(6)} />}
        </section>
    )
}

export default Footer
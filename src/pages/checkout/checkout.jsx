import { useNavigate } from "react-router-dom"
import Header from "../../components/molecules/header/header"
const IMAGE_ID='2xempty_cart_yfxml0'
const Checkout = () => {
    const navigate = useNavigate()
    const onHomeClick = () => {
        navigate("/")
    }
    return (
        <div className="home-container">
        <div className="header-section">
            <Header title="SECURE CHECKOUT" location={false} search={false} offers={false} cart={false} onLogoClick={onHomeClick}/>
        </div>
        <div className="main-section">
            <div className="checkout-container">
                <figure className="checkout-image">
                    <img src={'https://media-assets.swiggy.com/'+IMAGE_ID} alt="Checkout" />
                </figure>
                <h2 className="checkout-title">Your cart is empty</h2>
                <p className="checkout-text">You can go to home page to view more restaurants</p>
                <button className="checkout-button" onClick={onHomeClick}>SEE RESTAURANTS NEAR YOU</button>
            </div>
            {/* Todo Need to build the cart container */}
            <div className="cart-container">
                <div className="delivery-container"></div>
                <div className="cart-empty-container"></div>
            </div>
        </div>
    </div>
    )
}

export default Checkout
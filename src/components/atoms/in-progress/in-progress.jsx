import COOKING from '../../../../assets/cooking.gif'
import './in-progress.scss'
const InProgress = () => {
    return (
        <div className='in-progress-container'>
            <h1>We are still cooking this website.. Stay tuned..</h1>
            <figure className='cooking-image'>
                <img src={COOKING} alt="Cooking!" />
            </figure>
            <a className='image-credit' href="https://www.flaticon.com/free-animated-icons/cooking" title="Cooking animated icons created by Freepik - Flaticon">Image Credits: Cooking animated icons created by Freepik - Flaticon</a>
        </div>
    )
}

export default InProgress
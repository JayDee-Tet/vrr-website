const profile = '/pictures/rgPicture.webp';
import './rantCardStyles.css';

function Rant9(){
return(
    <div className="rant-card">
        <img className="rant-img" src={profile} alt="Profile Picture"></img>
        <h2 className='rant-title'>Argie</h2>
        <p className='rant-desc'>My wallet and my cravings are not on speaking terms.</p>
    </div>
);
}
export default Rant9;
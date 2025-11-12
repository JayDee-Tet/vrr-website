const profile = '/pictures/howardPicture.webp';
import './cardStyles.css';

function ProfileCard({onClick}){
return(
    <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
        <img className="card-img" all src={profile} alt="Howard Profile"></img>
        <h2 className='card-title'><span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-yellow-500"><span class="relative text-white dark:text-gray-950">Howard Ramos</span></span></h2>
    </div>
);
}
export default ProfileCard;
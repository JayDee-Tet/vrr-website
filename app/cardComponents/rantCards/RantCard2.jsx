const profile = '/pictures/jdPicture.webp';
import './rantCardStyles.css';

function Rant2(){
return(
    <div className="rant-card">
        <img className="rant-img" src={profile} alt="Profile Picture"></img>
        <h2 className='rant-title'>Skibidi Sigma Trash</h2>
        <p className='rant-desc'>MLBB trash talk is boring. It's always "Mahina" or "Delete mona ml" and never "Mas may silbi kapa pang pagkain ka nang baboy ko" or "Hawak kanalang live wire kaysa cellphone at least bibigyan ka attention noh?"</p>
    </div>
);
}
export default Rant2;
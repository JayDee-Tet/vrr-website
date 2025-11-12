import { playSound, sounds } from '../mainComponents/sound';

// Accept music-related state via props so this component can control playback
function whyVrrDetails({ isMusicPlaying, setIsMusicPlaying, bgMusic, setBgMusic, onClick }) {

  const rickRoll = () => {
    if (!bgMusic) {
      const audio = new Audio('/music/rick-roll.mp3');
      audio.loop = true;
      audio.volume = 0.5;
      setBgMusic && setBgMusic(audio);
      audio.play();
      setIsMusicPlaying && setIsMusicPlaying(true);
    } else {
      if (isMusicPlaying) {
        bgMusic.pause();
        setIsMusicPlaying && setIsMusicPlaying(false);
      } else {
        bgMusic.play();
        setIsMusicPlaying && setIsMusicPlaying(true);
      }
    }
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 pb-4 border-b-2 border-gray-200">
        
        <img 
          className="w-20 h-20 rounded-full object-cover border-4 border-yellow-500" 
          src="/pictures/rvv.webp" 
          alt="Khen Profile"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">"RVV"?</h2>
          <p className="text-orange-600 font-semibold">You clicked me? That's nice. Here have some candy 🍬</p>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-lg text-gray-800 mb-2">About Us</h3>
        <p className="text-gray-700 text-sm">
          We shot for the moon and got burned by several other projects getting delayed. This was nice though.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-lg text-gray-800 mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Scrolling</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Complaining</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Racists</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Rizzless</span>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
        <h3 className="font-bold text-sm text-gray-800 mb-1">🎉 Fun Fact</h3>
        <p className="text-gray-700 text-sm">- One of us sometimes drinks coffee that's neither hot nor cold just to prevent headaches</p>
        <p className="text-gray-700 text-sm">- Another loses his earbuds on the regular yet somehow hasn't completely lost them</p>
        <p className="text-gray-700 text-sm">- One is a chismis magnet</p>
        <p className="text-gray-700 text-sm">- Yet another wanted to randomize his profile</p>
      </div>

      <div>
        <h3 className="font-bold text-lg text-gray-800 mb-2">Connect</h3>
        <div className="flex flex-wrap gap-2">
          
          <button  className="" onClick={rickRoll}>
            
            {isMusicPlaying ? (
            <span className="">
            😉
            </span>
        ) : (
          <span className="grayscale opacity-60 hue-rotate-">😉</span>
        )}
          </button>

        
        
        </div>
      </div>
    </div>
  );
}

export default whyVrrDetails;
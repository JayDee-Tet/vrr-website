function ProfileDetails() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 pb-4 border-b-2 border-gray-200">
        <img 
          className="w-20 h-20 rounded-full object-cover border-4 border-yellow-500" 
          src="/pictures/jdPicture.webp" 
          alt="JayDee Profile"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">John Daniel T. Velayo</h2>
          <p className="text-orange-600 font-semibold">Why am I in BSCS?</p>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-lg text-gray-800 mb-2">About Me</h3>
        <p className="text-gray-700 text-sm">
          When you so boring you have the want to ai your own description. -Chatgpt
        </p>
      </div>

      <div>
        <h3 className="font-bold text-lg text-gray-800 mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">HTML</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">CSS/Tailwind</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Pen Spinning</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">React</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Next.js (Kinda)</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Drinking a depressing amount of black coffee</span>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
        <h3 className="font-bold text-sm text-gray-800 mb-1">Dev Comments</h3>
        <p className="text-gray-700 text-sm"> - Have you heard of our lord and savior lightning mcqueen?</p>
        <p className="text-gray-700 text-sm"> - Please play Until Then</p>
      </div>

      <div>
        <h3 className="font-bold text-lg text-gray-800 mb-2">Connect</h3>
        <div className="flex flex-wrap gap-2">
          <a href="https://github.com/howard" className="px-3 py-2 bg-gray-800 text-white rounded text-xs font-semibold hover:bg-gray-700">
            F Facebook
          </a>
          <a href="mailto:velayojohndaniel@gmail.com" className="px-3 py-2 bg-orange-500 text-white rounded text-xs font-semibold hover:bg-orange-600">
            📧 Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
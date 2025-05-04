import React from 'react';

// Assuming google-sans font is configured in Tailwind/CSS (using font-sans as fallback)
// Assuming Tailwind CSS is set up

const TopbarCloneRevised = () => {

  return (
    // Use padding for height, adjust as needed (py-2 is ~1rem total vertical padding)
    <div className="bg-[#1b1c1d] flex items-center justify-between px-4 py-2 text-gray-300"> {/* Slightly adjusted background based on image */}

      {/* Left Section: Logo and Version */}
      <div className="flex items-center">
         {/* Logo + Version Column */}
         <div className="flex flex-col">
            {/* Logo */}
            {/* Increased font size */}
            <div className="font-semibold text-xl font-sans text-gray-100 tracking-tight"> {/* Using font-sans, adjusted size/color/tracking */}
                Gemini <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text">Clown</span>
            </div>
            {/* Version Dropdown - Positioned below Logo */}
            <div className="mt-1"> {/* Add margin-top for spacing */}
                {/* Adjusted font size, padding, background, text color */}
                <button className="flex items-center text-xs font-medium text-gray-400 bg-[#282a2c] hover:bg-[#4b4d4f] px-2 py-0.5 rounded-2xl">
                    2.5 Pro (experimental)
                    {/* Updated Chevron SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 text-gray-500">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
      </div>

      {/* Right Section: Icons */}
      {/* Adjusted icon size and spacing */}
      <div className="flex items-center space-x-2">
        {/* Copy Button - Revised SVG */}
        <button className="p-2 rounded-full hover:bg-[#353739] text-gray-400 hover:text-gray-200">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"> {/* Adjusted size */}
             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
           </svg>
        </button>

        {/* Apps Grid - Revised SVG */}
        <button className="p-2 rounded-full hover:bg-[#353739] text-gray-400 hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"> {/* Adjusted size */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25z" />
          </svg>
        </button>

        {/* Profile - Adjusted size, ring, background */}
        {/* Increased size to w-9 h-9 */}
        <button className="ml-1 w-9 h-9 rounded-full bg-[#e84234] flex items-center justify-center text-white font-medium relative ring-2 ring-offset-2 ring-offset-[#1F1F1F] ring-[#7c8083] hover:ring-gray-200"> {/* Adjusted size, ring, bg, offset bg */}
           R
        </button>
      </div>
    </div>
  );
};

export default TopbarCloneRevised;


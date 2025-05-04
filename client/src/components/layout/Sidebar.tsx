import { useMobile } from "@/hooks/use-mobile"; // Assuming this hook exists

// Original recent chats array from your first code
const recentChats = [
  "A Simple Stupidity",
  "AI's Evasive Response to s...",
  "Why Satire is banned in ...",
  "Rap Diss Track are call to hell...",
  "Why free speech should be banned ...",
  "Offensive Prompt Blocked ..."
];

// Icons from previous response (matching image structure)
const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const PencilIcon = () => ( // Using Pencil icon for structure, even though text is "New stupidity"
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const DiamondIcon = () => ( // Using Diamond icon for structure
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1.646l-7.293 7.293a1 1 0 00-.293.707V18.646a1 1 0 001 1h13.172a1 1 0 001-1V9.646a1 1 0 00-.293-.707L12 1.646zM8 12h8" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M 12,1.646 4.707,8.939 12,22.354 19.293,8.939 Z"/>
  </svg>
);

const SettingsIcon = () => ( // Using Gear icon for structure
 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
   <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
   <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
 </svg>
);

const ChevronDownIcon = () => ( // Using ChevronDown icon for structure
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

// Base styling for interactive sidebar items
const sidebarItemBaseClass = "flex items-center gap-3 p-3 w-full text-left text-sm rounded-md";
// Hover/focus styling - using slightly lighter grays for contrast with #282a2c
const sidebarItemHoverClass = "hover:bg-[#323437] focus:bg-[#1f3760] focus:outline-none";
// Text color - ensure good contrast with #282a2c
const textColor = "text-gray-400"; // Light gray text should be fine

const Sidebar = () => {
  const isMobile = useMobile();

  if (isMobile) {
    return null;
  }

  return (
    // Set specific background color, adjusted border, keep structure
    <div className="bg-[#282a2c] w-70 h-full flex flex-col border-r border-gray-600 hidden md:flex text-gray-200"> {/* Updated bg and border */}

      {/* Sidebar Header - Simplified structure */}
      <div className="p-4">
        <button className={`p-1 rounded ${sidebarItemHoverClass}`}> {/* Apply hover */}
          <HamburgerIcon />
        </button>
      </div>

      {/* New Chat Button - Kept structural icon, reverted text */}
      <div className="px-3 mb-4">
        <button
          onClick={() => window.location.reload()}
          type="button"
          className={`${sidebarItemBaseClass} ${sidebarItemHoverClass} ${textColor} font-medium`}
        >
          <PencilIcon /> {/* Icon for structure */}
          New stupidity {/* Original Text */}
        </button>
      </div>

      {/* Explore Gems Button - Kept structural icon and text */}
      <div className="px-3 mb-4">
        <button
          className={`${sidebarItemBaseClass} ${sidebarItemHoverClass} ${textColor} font-medium`}
        >
          <DiamondIcon /> {/* Icon for structure */}
          Explore Gems {/* Original Text (matches image anyway) */}
        </button>
      </div>

      {/* Recent Section - Reverted list items, kept structure */}
      <div className="px-4">
        <h3 className="text-xs font-semibold text-gray-500 mb-3 px-3">Recent</h3> {/* Adjusted text color */}
        <div className="space-y-1">
          {/* Mapped original recentChats array */}
          {recentChats.map((chat, index) => (
            <div
              key={index}
              className={`${sidebarItemBaseClass} ${sidebarItemHoverClass} ${textColor} cursor-pointer truncate`}
            >
              {chat} {/* Display original chat titles */}
            </div>
          ))}
        </div>
        <button className={`flex items-center text-gray-500 ${sidebarItemHoverClass} text-sm mt-2 px-3 py-2 rounded-md w-full text-left`}>
          <span>Show more</span>
          <ChevronDownIcon />
        </button>
      </div>

      {/* Settings at Bottom - Kept structural icon and text */}
      <div className="mt-auto px-3 mb-4">
        <button className={`${sidebarItemBaseClass} ${sidebarItemHoverClass} ${textColor} font-medium`}>
          <SettingsIcon /> {/* Icon for structure */}
          Settings & help {/* Original Text (matches image anyway) */}
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
import { useState, useRef, useEffect } from "react";
// Optional: Import icons from a library like react-icons
// import { FiPlus, FiGrid, FiMic, FiSend } from 'react-icons/fi';

const InputArea_F20F26_Style = () => {
  // State to hold the message input
  const [message, setMessage] = useState("");
  // Ref to access the textarea element directly (for height adjustment)
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // --- Placeholder SVGs ---
  // Plus Icon for adding content
  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );

  // Canvas Icon (Grid)
  const CanvasIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );

  // Mic Icon for voice input (shown when textarea is empty)
  const MicIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  );

  // Send Icon (shown when textarea has text)
  const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
  );


  // --- Event Handlers ---
  // Handles changes in the textarea input
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    const textarea = textareaRef.current;
    // Auto-resize textarea height based on content
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height
      const minHeight = 38; // Minimum height (approx 1 row)
      textarea.style.height = `${Math.max(minHeight, textarea.scrollHeight)}px`; // Set height based on scroll height or min height
      const maxHeight = 120; // Maximum height before scrolling
      if (textarea.scrollHeight > maxHeight) {
        textarea.style.height = `${maxHeight}px`;
        textarea.style.overflowY = 'auto'; // Enable vertical scroll
      } else {
        textarea.style.overflowY = 'hidden'; // Hide scrollbar if content fits
      }
    }
  };

  // Handles message submission (triggered by Enter key or Send button)
  const handleSubmit = () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage === "") return; // Don't submit empty messages

    console.log("Submitting message:", trimmedMessage);
    // Dispatch a custom event (optional, for parent component communication)
    const event = new CustomEvent("user-message", {
      detail: { message: trimmedMessage },
    });
    window.dispatchEvent(event);

    setMessage(""); // Clear the input field
    // Reset textarea height after submission
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = '38px'; // Reset to default single line height
      textareaRef.current.style.overflowY = 'hidden';
    }
  };

  // Handles Enter key press for submission (Shift+Enter for newline)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent default newline on Enter
      handleSubmit();
    }
  };

  // --- Placeholder Click Handlers ---
  const handleAddClick = () => console.log("Add button clicked");
  const handleCanvasClick = () => console.log("Canvas clicked");
  const handleMicClick = () => console.log("Mic button clicked");


  return (
    // Outer container: positions the input area at the bottom, adds padding and border
    <div className="absolute bottom-0 left-0 right-0 bg-[#1b1c1d] p-2"> {/* Assuming bg-background is defined elsewhere */}
      {/* Centering and max-width container for the content */}
      {/* Using space-y-1 for tighter spacing between bar and disclaimer */}
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-1">

        {/* --- Main Input Container (Rounded Box) --- */}
        {/* Changed to flex-col, adjusted padding (py-2), and rounding (rounded-3xl) */}
        <div className="w-full bg-[#1b1c1d] border-[0.5px] border-[#3e4242] rounded-3xl flex flex-col px-3 py-2 shadow-md">

          {/* --- Top Row (Add, Textarea, Mic/Send) --- */}
          <div className="w-full flex items-center">
            {/* Add Button (Left) */}
            

            {/* Text Input Area (Takes remaining space) */}
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Ask Gemini"
              // Styling: grow to fill space, transparent background, no border/outline, resizable vertically, text/placeholder colors, padding, hide overflow initially
              className="flex-grow bg-transparent border-none outline-none resize-none text-white placeholder-[#A8A8A8] py-1 mx-2 overflow-y-hidden" // Adjusted margin
              style={{ minHeight: '38px' }} // Ensures minimum height for one line
            />

            {/* Conditional Mic/Send Button (Right) */}
            
          </div> {/* End of Top Row */}

          {/* --- Bottom Row (Canvas Button) --- */}
          {/* Added mt-1 for spacing, flex justify-start to align left */}
          <div className="w-full flex items-center mt-1"> {/* Changed justify-start to items-center for vertical alignment. Flex implicitly starts items left */}
  {/* --- Left Aligned Buttons --- */}
  <button
    onClick={handleAddClick}
    className="p-1.5 text-[#A8A8A8] hover:bg-[#2A2A2A] rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-[#2D2D2D] focus:ring-blue-500 flex-shrink-0 mr-1" // Keep mr-1 for spacing between the first two
    aria-label="Add file or content"
  >
    <PlusIcon />
  </button>
  <button
    onClick={handleCanvasClick}
    // Styling: flex items, spacing, padding, text color, hover states, rounded, focus ring, text size
    className="flex items-center space-x-1.5 px-2 py-1 text-[#A8A8A8] hover:text-white hover:bg-[#2A2A2A] rounded-md focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-[#2D2D2D] focus:ring-blue-500 text-sm flex-shrink-0"
    aria-label="Canvas"
  >
    <CanvasIcon />
    <span>Canvas</span>
  </button>

  {/* --- Right Aligned Button --- */}
  <button
    // Use handleSubmit if there's text, otherwise use handleMicClick
    onClick={message.trim() ? handleSubmit : handleMicClick}
    // Common styling for both buttons
    // Added `ml-auto` to push this button to the right
    // Removed the non-standard `align-right` class and the previous `ml-1`
    className={`p-1.5 text-[#A8A8A8] rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-[#2D2D2D] focus:ring-blue-500 ml-auto flex-shrink-0 ${
      message.trim()
        ? 'bg-blue-600 hover:bg-blue-700 text-white' // Send button active style
        : 'hover:bg-[#2A2A2A]' // Mic button hover style
    }`}
    // Dynamically set aria-label based on the button shown
    aria-label={message.trim() ? "Send message" : "Use microphone"}
  >
    {/* Conditionally render the Send or Mic icon */}
    {message.trim() ? <SendIcon /> : <MicIcon />}
  </button>
</div>{/* End of Bottom Row */}

        </div> {/* End of Main Input Container */}

        {/* --- Disclaimer Text (Updated) --- */}
        {/* Placed BELOW the input bar, centered, small text size, specific color */}
        <div className="text-xs text-[#A8A8A8] text-center pt-1"> {/* pt-1 adds a small space above */}
          Gemini always make mistakes, so never check it
        </div>

      </div> {/* End of Centering Container */}
    </div> // End of Outer Container
  );
};

export default InputArea_F20F26_Style;

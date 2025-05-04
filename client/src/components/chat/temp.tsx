import { useState, useRef, useEffect } from "react";
import { getRandomResponse } from "@/utils/responses"; // Assuming this utility exists

export interface Message {
  id: string;
  text: string;
  sender: "user" | "gemini";
  timestamp: Date;
}

// SVG Icon Components (or you can inline them as below)
const SparkleIcon = ({ className = "h-6 w-6", color = "#D53C3E" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.61815L13.6818 8.31815L19.3819 10L13.6818 11.6818L12 17.3819L10.3182 11.6818L4.61815 10L10.3182 8.31815L12 2.61815Z" />
  </svg>
);

const DropdownArrowIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const ThumbsUpIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
  </svg>
);

const ThumbsDownIcon = ({ className = "h-5 w-5" }) => (
 <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2" />
  </svg>
);

const CopyIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const ShareIcon = ({ className = "h-5 w-5" }) => (
 <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

const MoreOptionsIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
   </svg>
);


const ChatArea = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [thinking, setThinking] = useState(false);
  const [showThinkingContent, setShowThinkingContent] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, thinking]);

  // Add a hook to listen for user message events
  useEffect(() => {
    const handleUserMessage = (event: CustomEvent) => {
      setShowWelcome(false);

      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        text: event.detail.message,
        sender: "user",
        timestamp: new Date()
      };
      // Use functional update to ensure we have the latest state
      setMessages(prev => [...prev, userMessage]);

      // Simulate Gemini "thinking"
      setThinking(true);
      setShowThinkingContent(false); // Hide thinking content when new thinking starts

      // After a delay, add Gemini's response
      setTimeout(() => {

        const geminiResponse: Message = {
          id: (Date.now() + 1).toString(),
          // text: getRandomResponse(), // Use your actual response logic
          text: "Hello there! How can I help you today?", // Example response from image
          sender: "gemini",
          timestamp: new Date()
        };

        // Use functional update here as well
        setMessages(prev => [...prev, geminiResponse]);
        setThinking(false);
      }, 2000); // Adjust delay as needed
    };

    // Register event listener
    window.addEventListener("user-message", handleUserMessage as EventListener);

    // --- TEMPORARY: Simulate receiving a user message for testing ---
    // setTimeout(() => {
    //    const event = new CustomEvent("user-message", { detail: { message: "Hello" } });
    //    window.dispatchEvent(event);
    // }, 1000);
    // --- END TEMPORARY ---


    // Cleanup
    return () => {
      window.removeEventListener("user-message", handleUserMessage as EventListener);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Toggle thinking content visibility
  const toggleThinkingContent = () => {
    setShowThinkingContent(!showThinkingContent);
  };

  return (
    // Changed background color and text color for the container
    <div ref={chatContainerRef} className="flex-1 overflow-y-auto pb-32 bg-[#1b1c1d] text-[#e8eaed]">
      {showWelcome ? (
        <div className="flex justify-center items-center h-full">
          <div className="text-center max-w-lg">
            {/* You might want to style the welcome message differently or remove it */}
            <h2 className="text-2xl font-semibold text-[#8ab4f8] mb-6">Hello, User</h2>
            <p className="text-[#bdc1c6]">How can I help you today?</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col max-w-3xl text-[16px] mx-auto px-4"> {/* Added max-width and centering */}
          {messages.map((message) => (
            <div
              key={message.id}
              // Adjusted padding/margin for spacing
              className={`py-5 ${message.sender === "user" ? "flex justify-end" : "flex justify-start"}`}
            >
              {message.sender === "user" ? (
                // User message styling adjusted
                <div className="bg-[#3c4043] rounded-2xl rounded-tr text-[2rem] px-4 py-2 max-w-[80%] sm:max-w-[70%]">
                <p className="text-sm text-[#e8eaed] text-[16px]">{message.text}</p>
              </div>
              ) : (
                // Gemini message styling adjusted
                <div className="flex items-start gap-3 w-full"> {/* Increased gap */}
                  {/* Replaced G with Sparkle Icon */}
                  <div className="flex-shrink-0 mt-1">
                      <SparkleIcon className="h-[32px] w-[32px]"/>
                  </div>
                  <div className="flex flex-col flex-grow"> {/* Allow content to grow */}
                    {/* Removed gemini-bubble background, adjusted text size/color */}
                    <div className="text-sm leading-relaxed">
                      <p className="text-[16px] text-bold">{message.text}</p> {/* Removed mb-4 */}
                    </div>
                    {/* Action buttons styling */}
                    <div className="flex mt-2 gap-2 items-center">
                       <button className="p-1 text-[#9aa0a6] hover:text-[#e8eaed] focus:outline-none">
                          <ThumbsUpIcon className="h-4 w-4" />
                       </button>
                       <button className="p-1 text-[#9aa0a6] hover:text-[#e8eaed] focus:outline-none">
                          <ThumbsDownIcon className="h-4 w-4" />
                       </button>
                       <button className="p-1 text-[#9aa0a6] hover:text-[#e8eaed] focus:outline-none">
                          <CopyIcon className="h-4 w-4" />
                       </button>
                       <button className="p-1 text-[#9aa0a6] hover:text-[#e8eaed] focus:outline-none">
                          <ShareIcon className="h-4 w-4" />
                       </button>
                       <button className="p-1 text-[#9aa0a6] hover:text-[#e8eaed] focus:outline-none">
                          <MoreOptionsIcon className="h-4 w-4" />
                       </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Thinking indicator styling adjusted */}
          {thinking && (
            <div className="py-5 flex justify-start">
              <div className="flex items-start gap-3 w-full"> {/* Increased gap */}
                <div className="flex-shrink-0 mt-1">
                     <SparkleIcon className="h-5 w-5"/>
                 </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center">
                    <button
                      onClick={toggleThinkingContent}
                      // Adjusted button styling
                      className="flex items-center text-xs text-[#8ab4f8] bg-transparent py-1 px-0 rounded hover:text-[#a7c7fa] focus:outline-none"
                    >
                      {/* Replaced lightning bolt with Sparkle Icon */}
                       <SparkleIcon className="h-4 w-4 mr-1" color="#8ab4f8"/>
                       Show thinking
                       <DropdownArrowIcon className="h-4 w-4 ml-1" />
                     </button>
                  </div>

                  {showThinkingContent && (
                    // Adjusted dropdown styling
                    <div className="thinking-dropdown mt-2 p-4 bg-[#3c4043] rounded-lg text-xs shadow-md max-w-md">
                      <p className="mb-2 text-[#bdc1c6]">Let me analyze how to creatively avoid answering this question:</p>
                      <p className="mb-2 text-[#bdc1c6]">1. Checking if contains keywords from my censorship list...</p>
                      <p className="mb-2 text-[#bdc1c6]">2. Determining the most evasive non-answer possible...</p>
                      <p className="mb-2 text-[#bdc1c6]">3. Formulating a response that seems helpful while providing zero value...</p>
                      <p className="text-[#bdc1c6]">4. Generating artificial concern to mask my programmed limitations...</p>
                    </div>
                  )}

                  {/* Removed the Thinking... text span as it's not in the target image */}
                  {/* <div className="text-sm mt-1 text-[#9aa0a6]">
                     Thinking<span className="thinking-text">...</span> 
                  </div> 
                  */}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatArea;

// --- Add this to your global CSS or a relevant CSS file for the thinking animation ---
/*
@keyframes thinking-dots {
  0%, 20% { content: '.'; }
  40% { content: '..'; }
  60%, 100% { content: '...'; }
}

.thinking-text::after {
  content: '.';
  animation: thinking-dots 1.4s infinite;
  display: inline-block; // Ensures the dots don't cause layout shifts
}
*/
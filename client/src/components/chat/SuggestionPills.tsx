import { useState, useEffect } from "react";

const suggestions = [
  {
    title: "Factor numbers explicitly",
    description: "with quantum computing"
  },
  {
    title: "Create an app",
    description: "for tracking mistakes of Gemini"
  },
  {
    title: "Compare stupidities",
    description: "of Gemini 2.0 and 2.5"
  }
];

const SuggestionPills = () => {
  const [visible, setVisible] = useState(true);

  // Hide suggestions when a message is sent
  useEffect(() => {
    const handleUserMessage = () => {
      setVisible(false);
    };

    // Assuming 'user-message' event is dispatched elsewhere when the user sends a message
    window.addEventListener("user-message", handleUserMessage as EventListener);

    return () => {
      window.removeEventListener("user-message", handleUserMessage as EventListener);
    };
  }, []);

  const handleSuggestionClick = (suggestion: { title: string, description: string }) => {
    const message = `${suggestion.title} ${suggestion.description}`;

    // Dispatch custom event with the message - this part depends on your app's event handling
    const event = new CustomEvent("user-message", {
      detail: { message }
    });
    window.dispatchEvent(event);
     // You might want to hide the pills immediately on click too
     // setVisible(false);
  };

  if (!visible) return null;

  return (
    // Container for the pills - Adjust positioning and width as needed
    // Using flex-wrap allows pills to wrap to the next line if space is limited
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-36 flex justify-center bg-[#1b1c1d] flex-wrap gap-3 w-full max-w-3xl px-4">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          // Apply Tailwind classes for styling similar to the image
          className="border-[#3e4242] bg-[#1b1c1d] border text-white px-4 py-2 rounded-2xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 ease-in-out text-sm"
          onClick={() => handleSuggestionClick(suggestion)}
        >
          {/* Ensure text structure matches the image */}
          <span className="block font-medium">{suggestion.title}</span>
          <span className="block text-gray-300">{suggestion.description}</span>
          {/* Original combined line approach (less control over styling) */}
          {/* {suggestion.title}<br />{suggestion.description} */}
        </button>
      ))}
    </div>
  );
};

export default SuggestionPills;
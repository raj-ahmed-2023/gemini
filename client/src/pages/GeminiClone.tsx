import { useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import ChatArea from "@/components/chat/ChatArea";
import InputArea from "@/components/chat/InputArea";
import SuggestionPills from "@/components/chat/SuggestionPills";

const GeminiClone = () => {
  useEffect(() => {
    // Update document title
    document.title = "Gemini Clown";
    
    // Add Google Fonts (Roboto) to the document
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap";
    document.head.appendChild(link);
    
    return () => {
      // Clean up when component unmounts
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Bar */}
        <Topbar />
        
        {/* Chat Area */}
        <ChatArea />
        
        {/* Suggested Actions */}
        <SuggestionPills />
        
        {/* Input Area */}
        <InputArea />
      </div>
    </div>
  );
};

export default GeminiClone;

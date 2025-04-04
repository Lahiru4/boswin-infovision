import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Paperclip,
  Smile,
  ChevronRight,
} from "lucide-react";

// Add media query detection
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can we help you today?",
      sender: "agent",
      time: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 640px)"); // Check if device is mobile

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      if (inputRef.current) {
        inputRef.current.focus();
      }

      // When opening on mobile, add a class to prevent body scrolling
      if (isMobile) {
        if (isOpen) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      }
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, messages, isMobile]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      time: new Date(),
    };

    setMessages([...messages, newUserMessage]);
    setInputValue("");

    // Simulate typing indicator
    setIsTyping(true);

    // Simulate response after delay
    setTimeout(() => {
      const responses = [
        "Thank you for your message. One of our agents will be with you shortly.",
        "I understand your question. Let me check that for you.",
        "Thanks for reaching out! How else can I assist you today?",
        "I'd be happy to help with that. Could you provide more details?",
        "That's a great question. Our team is working on it.",
      ];

      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      const newAgentMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "agent",
        time: new Date(),
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, newAgentMessage]);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-red-500 hover:bg-red-600 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-full max-w-[calc(100vw-48px)] sm:max-w-[360px] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        } overflow-hidden`}
        style={{ maxHeight: "calc(100vh - 120px)" }}
      >
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-red-500 to-boswin-blue p-3 sm:p-4 text-white flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base">Live Chat</h3>
              <p className="text-xs text-white/80">
                {isMobile
                  ? "We're here to help"
                  : "We typically reply within minutes"}
              </p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="text-white/80 hover:text-white rounded-full p-1"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div
          className="flex-1 p-3 md:p-4 overflow-y-auto bg-gray-50"
          style={{ maxHeight: "calc(100vh - 240px)" }}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 max-w-[85%] ${
                  message.sender === "user"
                    ? "bg-red-500 text-white rounded-tr-none"
                    : "bg-white shadow-md rounded-tl-none"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === "user"
                      ? "text-white/70"
                      : "text-gray-500"
                  }`}
                >
                  {formatTime(message.time)}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-white rounded-2xl px-4 py-3 shadow-md rounded-tl-none">
                <div className="flex space-x-1">
                  <div
                    className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Pre-defined Questions */}
        <div className="bg-white border-t border-gray-100 py-2 px-1 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 pb-1">
            {[
              "How can I help?",
              "Pricing info",
              "Services",
              "Contact hours",
            ].map((q, i) => (
              <button
                key={i}
                onClick={() => {
                  setInputValue(q);
                  if (inputRef.current) inputRef.current.focus();
                }}
                className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full whitespace-nowrap flex-shrink-0 flex items-center"
              >
                {q} <ChevronRight className="w-3 h-3 ml-1" />
              </button>
            ))}
          </div>
        </div>

        {/* Chat Input */}
        <div className="bg-white p-2 sm:p-3 border-t border-gray-100">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-transparent outline-none text-sm w-0"
            />
            <div className="flex items-center ml-1">
              <button className="text-gray-400 hover:text-gray-600 p-1 hidden sm:block focus:outline-none">
                <Paperclip className="w-4 h-4" />
              </button>
              <button className="text-gray-400 hover:text-gray-600 p-1 hidden sm:block focus:outline-none">
                <Smile className="w-4 h-4" />
              </button>
              <button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === ""}
                className={`ml-1 p-1.5 rounded-full focus:outline-none ${
                  inputValue.trim() === ""
                    ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                    : "text-white bg-red-500 hover:bg-red-600"
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveChat;

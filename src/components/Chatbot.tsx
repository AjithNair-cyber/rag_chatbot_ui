import { useEffect, useRef, useState } from "react";
import type { Message } from "../types/paramTypes";
import "./main.scss";
import apiFunctions from "../functions/apiFunctions";
import type { Source } from "../types/responseTypes";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Scroll to bottom when new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);

    // Clear the input field immediately
    setInput("");

    // Here you would call your API to get the bot's response
    setIsLoading(true);
    try {
      const botResponse = await apiFunctions.getQueryResponse(userMessage.text);
      const botMessage: Message = {
        id: Date.now().toString(),
        text: botResponse.answer, // Assuming the response has a 'text' field
        sender: "bot",
        sources: botResponse.sources,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message to API:", error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "Sorry, something went wrong. Please try again.",
        sender: "bot",
        success: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>RAG Chatbot</h1>
        <button className="reset-button">Reset Session</button>
      </header>

      <main className="chat-window">
        {messages.map((msg) => {
          let messageClass = "chat-message ";
          if (msg.sender === "user") {
            messageClass += "user-message";
          } else if (msg.success === false) {
            messageClass += "bot-error-message";
          } else {
            messageClass += "bot-message";
          }
          return (
            <div key={msg.id} className={messageClass}>
              <p>{msg.text}</p>
              {msg.sources &&
                Array.isArray(msg.sources) &&
                msg.sources.length > 0 && (
                  <ul className="sources-list">
                    {msg.sources.map((source: Source, idx: number) => (
                      <li key={idx}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          );
        })}
        {isLoading && (
          <div className="chat-message bot-message">
            <div className="typing-container">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      <form className="input-area" onSubmit={sendMessage}>
        <input
          type="text"
          aria-label="Chat message input"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
        />
        <button type="submit" disabled={!input.trim() || isLoading}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;

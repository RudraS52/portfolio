
import React, { useState, useEffect, useRef } from 'react';
import './AIAssistant.css';
import { ChevronDown } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Stores the conversation displayed in the chat window.
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi! I’m Rudra’s AI Portfolio Assistant. 🚀 Ask me about his development experience, technical skills, projects, certifications, blogs, or contact details!'
    }
  ]);

  const [input, setInput] = useState('');

  // Tracks whether the backend is waiting for an AI response.
  const [isLoading, setIsLoading] = useState(false);

  const chatEndRef = useRef(null);

  // Scroll to the latest message whenever the conversation changes.
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Sends the visitor's message to the secure Vercel backend.
  const handleSend = async () => {
    const currentInput = input.trim();

    // Ignore empty messages and duplicate submissions.
    if (!currentInput || isLoading) return;

    // Display the visitor's message immediately.
    setMessages(prev => [
      ...prev,
      { sender: 'user', text: currentInput }
    ]);

    setInput('');
    setIsLoading(true);

    try {
      // The backend calls OpenAI using the server-side API key.
      const response = await fetch(
  'https://portfolio-jade-nine-36.vercel.app/api/chat',
  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
  message: currentInput,
  history: messages.map((msg) => ({
    role: msg.sender === 'bot' ? 'assistant' : 'user',
    content: msg.text
  }))
})
});

      const data = await response.json();

      // Handle errors returned by the backend.
      if (!response.ok) {
        throw new Error(data.error || 'Unable to get an AI response.');
      }

      // Display the AI-generated answer.
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: data.reply || 'Sorry, I could not generate a response.'
        }
      ]);
    } catch (error) {
      // Show a friendly message if the request fails.
      console.error('Chat request failed:', error);

      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: 'Sorry, I could not connect to the AI assistant. Please try again in a moment.'
        }
      ]);
    } finally {
      // Re-enable the input after success or failure.
      setIsLoading(false);
    }
  };

  // Send the message when the visitor presses Enter.
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="ai-assistant-widget">
      {isOpen && (
        <div
          className="ai-chat-card"
          role="dialog"
          aria-label="Rudra's AI Portfolio Assistant"
        >
<div className="ai-chat-header">
  <div className="ai-chat-brand">
    <span
  className={`ai-orb ${isLoading ? 'is-loading' : ''}`}
  aria-hidden="true"
>
  <span className="ai-orb-cloud ai-orb-cloud-one" />
  <span className="ai-orb-cloud ai-orb-cloud-two" />
  <span className="ai-orb-core" />
</span>
    <h3>Rudra's AI Assistant</h3>
  </div>

  <button
    type="button"
    className="ai-chat-close"
    onClick={() => setIsOpen(false)}
    aria-label="Minimize chat"
    title="Minimize chat"
  >
    <ChevronDown size={22} />
  </button>
</div>


<div className="ai-chat-messages" aria-live="polite">
  {messages.map((msg, idx) => (
    <div
      key={idx}
      className={`ai-message-row ${
        msg.sender === "user" ? "user-row" : "bot-row"
      }`}
    >
      <div
        className={`ai-message-bubble ${
          msg.sender === "user" ? "user-bubble" : "bot-bubble"
        }`}
      >
        {msg.sender === "user" ? (
          <span style={{ whiteSpace: "pre-wrap" }}>
            {msg.text}
          </span>
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
  {msg.text}
</ReactMarkdown>
        )}
      </div>
    </div>
  ))}

  {/* Shows feedback while the AI is generating a reply. */}
  {isLoading && (
    <div className="ai-message-row bot-row">
      <span className="ai-message-bubble bot-bubble">
        Thinking...
      </span>
    </div>
  )}

  <div ref={chatEndRef} />
</div>

          <div className="ai-chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about projects or skills..."
              className="ai-input-field"
              disabled={isLoading}
              maxLength={2000}
              aria-label="Type your message"
            />

            <button
              type="button"
              onClick={handleSend}
              className="ai-send-button"
              disabled={isLoading || !input.trim()}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      )}
<button
  type="button"
  className="ai-chat-toggle"
  onClick={() => setIsOpen(prev => !prev)}
  aria-label={isOpen ? 'Close assistant' : "Open Rudra's AI Assistant"}
  aria-expanded={isOpen}
  title={isOpen ? 'Close assistant' : "Chat with Rudra's AI Assistant"}
>
  {isOpen ? (
  '×'
) : (
  <>
    <span
      className={`ai-orb ai-orb-launcher ${
        isLoading ? 'is-loading' : ''
      }`}
      aria-hidden="true"
    >
      <span className="ai-orb-cloud ai-orb-cloud-one" />
      <span className="ai-orb-cloud ai-orb-cloud-two" />
      <span className="ai-orb-core" />
    </span>

    <span className="ai-chat-toggle-icon" aria-hidden="true">
      💬
    </span>
  </>
)}
</button>
    </div>
  );
};

export default AiAssistant;

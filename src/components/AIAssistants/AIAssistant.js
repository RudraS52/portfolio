
import React, { useState, useEffect, useRef } from 'react';
import './AIAssistant.css';

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi! I’m Rudra’s AI Portfolio Assistant. 🚀 Ask me about his full development experience, technical skills, projects, certifications, blogs, or how to contact him!'
    }
  ]);

  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    const currentInput = input.trim();
    if (!currentInput) return;

    setMessages(prev => [
      ...prev,
      { sender: 'user', text: currentInput }
    ]);
    setInput('');

    let botReply =
      "I'm not quite sure about that exact phrase. Try asking about my 'projects', 'skills', 'certifications', 'blog', 'resume', or 'contact' details! 😊";

    const lowerInput = currentInput.toLowerCase();

    if (
      lowerInput.includes('hello') ||
      lowerInput.includes('hi') ||
      lowerInput.includes('hey')
    ) {
      botReply = "Hello! 👋 I'm here to help you navigate Rudra's professional profile. What would you like to know about his engineering and design background?";
    } else if (
      lowerInput.includes('project') ||
      lowerInput.includes('work') ||
      lowerInput.includes('build')
    ) {
      botReply =
        "Rudra has built various professional applications. Here are the core highlights:\n\n" +
        "📱 1. Product Comparison App: A responsive React application for comparing smartphone metrics.\n\n" +
        "🔑 2. Employee Verification API: An ASP.NET Core Web API project using C#.\n\n" +
        "🍳 3. Recipe Search App: A JavaScript frontend for searching recipes.\n\n" +
        "💡 Type 'comparison app' or 'verification api' for more details!";
    } else if (lowerInput.includes('comparison app')) {
      botReply = "The Product Comparison App uses React, CSS, and JavaScript to present product metrics in a responsive layout.";
    } else if (
      lowerInput.includes('verification api') ||
      lowerInput.includes('.net') ||
      lowerInput.includes('c#')
    ) {
      botReply = "The Employee Verification API is an ASP.NET Core project written in C#. Refer to the project's actual source code for its implemented endpoints and validation logic.";
    } else if (
      lowerInput.includes('skill') ||
      lowerInput.includes('techno') ||
      lowerInput.includes('language')
    ) {
      botReply =
        "Rudra's technical skills include:\n\n" +
        "⚡ Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, responsive UI.\n\n" +
        "⚙️ Web development: ASP.NET Core MVC, C#, and REST API integration.\n\n" +
        "🛠️ Tools: Git, GitHub, GitHub Pages, and GitLab CI/CD.";
    } else if (
      lowerInput.includes('certif') ||
      lowerInput.includes('award') ||
      lowerInput.includes('course')
    ) {
      botReply = "You can explore the Certifications section of Rudra's portfolio to review his listed credentials and achievements.";
    } else if (
      lowerInput.includes('blog') ||
      lowerInput.includes('post') ||
      lowerInput.includes('write')
    ) {
      botReply = "Explore the Blog section of Rudra's portfolio for his published technical articles and development notes.";
    } else if (
      lowerInput.includes('resume') ||
      lowerInput.includes('experience') ||
      lowerInput.includes('history')
    ) {
      botReply = "Rudra has 8+ years of web development experience, including frontend/UI development and ASP.NET MVC/.NET-based enterprise applications. His resume provides further details.";
    } else if (
      lowerInput.includes('contact') ||
      lowerInput.includes('hire') ||
      lowerInput.includes('email') ||
      lowerInput.includes('linkedin')
    ) {
      botReply =
        "Let's connect!\n\n" +
        "📧 Email: rpsingh.developer@gmail.com\n\n" +
        "💼 LinkedIn: https://www.linkedin.com/in/web-developer-rp-singh/\n\n" +
        "🐙 GitHub: https://github.com/rudras52";
    } else if (lowerInput.includes('time')) {
      botReply = `The current time is ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}. ⏰`;
    } else if (
      lowerInput.includes('bye') ||
      lowerInput.includes('thank') ||
      lowerInput.includes('cool')
    ) {
      botReply = "Thank you for visiting Rudra's portfolio! Feel free to connect using the contact details. 👋";
    }

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: botReply }
      ]);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
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
            <h3>Rudra's Assistant</h3>

            <button
              type="button"
              className="ai-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              title="Close chat"
            >
              ×
            </button>
          </div>

          <div className="ai-chat-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`ai-message-row ${
                  msg.sender === 'user' ? 'user-row' : 'bot-row'
                }`}
              >
                <span
                  className={`ai-message-bubble ${
                    msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'
                  }`}
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
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
            />

            <button
              type="button"
              onClick={handleSend}
              className="ai-send-button"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className="ai-chat-toggle"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label={isOpen ? 'Close assistant' : 'Open assistant'}
        aria-expanded={isOpen}
        title={isOpen ? 'Close assistant' : "Chat with Rudra's Assistant"}
      >
        {isOpen ? '×' : '💬'}
      </button>
    </div>
  );
};

export default AiAssistant;

import React, { useState, useEffect, useRef } from 'react';
import './AIAssistant.css'; 

const AiAssistant = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I’m Rudra’s AI Portfolio Assistant. 🚀 Ask me about his full development experience, technical skills, projects, certifications, blogs, or how to contact him!' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  // Auto-scrolls window down to the newest chat bubble seamlessly
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    const currentInput = input.trim();
    if (!currentInput) return;

    // 1. Instantly render the user's message bubble
    const userMessage = { sender: 'user', text: currentInput };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // 2. Comprehensive decision logic matched directly to your specific professional portfolio content
    let botReply = "I'm not quite sure about that exact phrase. Try asking about my 'projects', 'skills', 'certifications', 'blog', 'resume', or 'contact' details! 😊";
    const lowerInput = currentInput.toLowerCase();

    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      botReply = "Hello! 👋 I'm here to help you navigate Rudra's professional profile. What would you like to know about his engineering and design background?";
    } 
    else if (lowerInput.includes('project') || lowerInput.includes('work') || lowerInput.includes('build')) {
      botReply = "Rudra has built various professional applications. Here are the core highlights:\n\n" + 
                 "📱 1. Product Comparison App: A highly responsive React framework designed to compare smartphone metrics side-by-side cleanly.\n\n" +
                 "🔑 2. Employee Verification API: A production-ready, secure corporate auditing platform built using ASP.NET Core Web APIs and C#.\n\n" +
                 "🍳 3. Recipe Search App: An interactive frontend JavaScript client that queries dynamic global culinary data.\n\n" +
                 "💡 Type 'comparison app' or 'verification api' to hear structural details about either!";
    } 
    else if (lowerInput.includes('comparison app')) {
      botReply = "The 'product-comparison-app' is a clean frontend project utilizing React, Modern CSS, and JavaScript. It features a responsive layout designed to align metrics across column trees dynamically, allowing recruiters to judge UX structure across screen ratios.";
    } 
    else if (lowerInput.includes('verification api') || lowerInput.includes('net') || lowerInput.includes('c#')) {
      botReply = "The 'EmpVerificationAPI' backend is an employee authorization module written in C# on an ASP.NET Core platform. It establishes secure routing pathways, data validations, and server endpoints to safely audit or log staff records.";
    } 
    else if (lowerInput.includes('skill') || lowerInput.includes('techno') || lowerInput.includes('language')) {
      botReply = "Rudra’s technical capabilities span across frontend layout design and backend API structures:\n\n" +
                 "⚡ Core Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Accessible UI Layouts, Typography (@fontsource/poppins).\n\n" +
                 "⚙️ Backend Systems: C#, ASP.NET Core Web APIs, Secure Routing, Object-Oriented Programming.\n\n" +
                 "🛠️ Workflows & DevOps: Git/GitHub source management, GitHub Pages deployment pipelines, Cross-browser performance validation.";
    }
    else if (lowerInput.includes('certif') || lowerInput.includes('award') || lowerInput.includes('course')) {
      botReply = "Rudra values continuous growth! You can scroll up to check out his 'Certifications' block, which showcases credentials verifying his professional capabilities in UI/UX architecture, layout accessibility, and software development methodologies.";
    }
    else if (lowerInput.includes('blog') || lowerInput.includes('post') || lowerInput.includes('write')) {
      botReply = "Rudra maintains a technical development 'Blog' component directly on this portfolio. He writes about frontend performance optimizations, cleaner user interfaces, responsive design principles, and scalable system architectures.";
    }
    else if (lowerInput.includes('resume') || lowerInput.includes('experience') || lowerInput.includes('history')) {
      botReply = "Rudra is an expert Senior Web UI Designer & Front‑end Developer. His structural 'Resume' layout is built right into this application below. It documents his historical professional timeline, design-to-code leadership workflows, and core architecture implementations.";
    }
    else if (lowerInput.includes('contact') || lowerInput.includes('hire') || lowerInput.includes('email') || lowerInput.includes('linkedin')) {
      botReply = "Let's connect! You can reach Rudra through these verified links:\n\n" +
                 "📧 Email: rpsingh.developer@gmail.com\n\n" +
                 "💼 LinkedIn: ://linkedin.com\n\n" +
                 "🐙 GitHub: ://github.com\n\n" +
                 "He's currently open to exciting new full-time engineering and interface design opportunities!";
    } 
    else if (lowerInput.includes('time')) {
      botReply = `The current time is ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}. Perfect hour to discuss engineering roles! ⏰`;
    } 
    else if (lowerInput.includes('bye') || lowerInput.includes('thank') || lowerInput.includes('cool')) {
      botReply = "Thank you for checking out my chatbot assistant! Have a wonderful day, and feel free to connect with Rudra using the contact links below! 👋✨";
    }

    // 3. Simulate a natural 500ms conversational delay
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="ai-chat-card">
      <div className="ai-chat-header">
        <h3>Rudra's Assistant</h3>
      </div>

      <div className="ai-chat-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`ai-message-row ${msg.sender === 'user' ? 'user-row' : 'bot-row'}`}
          >
            <span 
              className={`ai-message-bubble ${msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'}`}
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
          placeholder="Ask about my blog, certs, or projects..."
          className="ai-input-field"
        />
        <button onClick={handleSend} className="ai-send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default AiAssistant;

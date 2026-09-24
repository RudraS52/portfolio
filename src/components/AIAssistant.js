import React, { useState } from 'react';

const AiAssistant = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I’m your AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    // Simple static logic for testing
    let botReply = "Sorry, I didn’t get that.";

    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('hello')) {
      botReply = "Hello there! 👋 How’s your day going?";
    } else if (lowerInput.includes('time')) {
      botReply = `The current time is ${new Date().toLocaleTimeString()}`;
    } else if (lowerInput.includes('your name')) {
      botReply = "I’m the demo AI assistant. 😊";
    } else if (lowerInput.includes('bye')) {
      botReply = "Goodbye! Have a great day! 👋";
    }

    setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    setInput('');
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '10px',
      fontFamily: 'Arial'
    }}>
      <div style={{
        height: '300px',
        overflowY: 'auto',
        padding: '5px',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px'
      }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.sender === 'user' ? 'right' : 'left',
              margin: '5px 0'
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '8px',
                borderRadius: '8px',
                backgroundColor: msg.sender === 'user' ? '#4cafef' : '#e0e0e0',
                color: msg.sender === 'user' ? '#fff' : '#000'
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', marginTop: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
        <button
          onClick={handleSend}
          style={{
            marginLeft: '5px',
            padding: '8px 12px',
            borderRadius: '5px',
            backgroundColor: '#4cafef',
            color: '#fff',
            border: 'none'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AiAssistant;

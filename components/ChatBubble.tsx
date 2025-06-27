'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your personal wig stylist. How can I help you find the perfect look today?",
      sender: 'stylist',
      time: 'now'
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      time: 'now'
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');

    // Simulate stylist response
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        text: "Great question! Let me help you with that. Based on your needs, I'd recommend...",
        sender: 'stylist',
        time: 'now'
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 shadow-2xl border-0 z-50 flex flex-col">
          <CardHeader className="bg-gradient-to-r from-[#ff6a6a] to-[#ff9a9a] text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">S</span>
                </div>
                <div>
                  <CardTitle className="text-sm">Chat with Stylist</CardTitle>
                  <p className="text-xs opacity-90">Usually responds instantly</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 p-1 h-auto"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 p-0 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.sender === 'user'
                        ? 'bg-[#ff6a6a] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t flex space-x-2">
              <Input
                type="text"
                placeholder="Ask about wigs, styling, care..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 text-sm"
              />
              <Button 
                type="submit" 
                size="sm" 
                className="bg-[#ff6a6a] hover:bg-[#ff5555] text-white"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Chat Button */}
      <Button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#ff6a6a] hover:bg-[#ff5555] text-white shadow-lg z-40 hover-lift"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </>
  );
}
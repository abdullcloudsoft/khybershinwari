import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Phone, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ChatMessage } from '../types';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose, onOpen }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: `Assalam-o-Alaikum! Welcome to ${RESTAURANT_INFO.name}. How can I assist you with your dining or order inquiry today?`,
      timestamp: 'Just now',
      suggestedPrompts: [
        'Where are you located?',
        'How do I order?',
        'Opening hours',
        'Contact info',
        'Shinwari menu & cuts',
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const generateAnswer = (userQuery: string): string => {
    const q = userQuery.toLowerCase();

    if (q.includes('location') || q.includes('where') || q.includes('address') || q.includes('map') || q.includes('rawalpindi')) {
      return `We are located at ${RESTAURANT_INFO.location}. You can easily find us right at the food street near the cricket stadium in Shamsabad!`;
    }

    if (q.includes('order') || q.includes('deliver') || q.includes('takeaway') || q.includes('book') || q.includes('reserve')) {
      return `To place an order for fresh mutton/chicken karahi or reserve a Dastarkhwan floor seating, please call our kitchen directly at ${RESTAURANT_INFO.phone} or send a message on WhatsApp. All orders are freshly prepared to order!`;
    }

    if (q.includes('hour') || q.includes('time') || q.includes('open') || q.includes('close') || q.includes('when')) {
      return `${RESTAURANT_INFO.name} is open daily from 1:00 PM to 2:00 AM (serving Lunch, Dinner, and Late Night Dastarkhwan).`;
    }

    if (q.includes('contact') || q.includes('phone') || q.includes('call') || q.includes('email') || q.includes('number') || q.includes('whatsapp')) {
      return `You can reach us at:\n• Phone: ${RESTAURANT_INFO.phone}\n• Email: ${RESTAURANT_INFO.email}\n• WhatsApp: 0300 5592299\n• Facebook: Khyber Shanwari DastarKhawn`;
    }

    if (q.includes('menu') || q.includes('price') || q.includes('dish') || q.includes('food') || q.includes('mutton') || q.includes('karahi') || q.includes('rate') || q.includes('cut')) {
      return `In authentic Shinwari tradition, our fresh mutton and chicken are prepared by weight (half kg, 1 kg, or custom weight) cooked simply in natural fat, salt, tomatoes, and green chilies. For today's specific fresh cuts and live rates, call or WhatsApp our kitchen directly at ${RESTAURANT_INFO.phone}.`;
    }

    if (q.includes('dastarkhwan') || q.includes('family') || q.includes('seating') || q.includes('hall')) {
      return `Yes! We offer authentic Pashtun Dastarkhwan floor seating as well as table arrangements, making it ideal for families, friends, and large gatherings.`;
    }

    return `Thank you for your question! For quick assistance regarding today's fresh cuts, orders, or directions to Cricket Stadium Food Street Shamsabad, please call or WhatsApp us at ${RESTAURANT_INFO.phone}.`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');

    setTimeout(() => {
      const reply = generateAnswer(query);
      const botMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: reply,
        timestamp: 'Now',
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 400);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          id="chatbot-launcher-btn"
          type="button"
          onClick={onOpen}
          aria-label="Open restaurant assistant"
          className="fixed bottom-6 right-6 z-40 p-3.5 bg-amber-700 hover:bg-amber-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center cursor-pointer group"
        >
          <Bot className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
            Ask Assistant
          </span>
        </button>
      )}

      {/* Discrete Chatbot Window */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[540px] bg-white rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-amber-800 text-white px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-700 text-amber-100 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold leading-tight">
                  Khyber Shinwari Assistant
                </h3>
                <span className="text-[10px] text-amber-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Online • Cricket Stadium Food Street
                </span>
              </div>
            </div>

            <button
              id="chatbot-close-btn"
              type="button"
              onClick={onClose}
              className="p-1 hover:bg-amber-900 rounded-lg text-amber-200 hover:text-white transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF8F5] text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-3 leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-amber-700 text-white'
                      : 'bg-white text-stone-800 border border-stone-200/90 shadow-2xs whitespace-pre-line'
                  }`}
                >
                  {m.text}
                </div>

                {/* Suggested Prompts */}
                {m.suggestedPrompts && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {m.suggestedPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => handleSendMessage(prompt)}
                        className="px-2.5 py-1 bg-white hover:bg-amber-50 text-amber-900 border border-amber-200/80 rounded-full text-[11px] font-medium transition-colors cursor-pointer"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Direct Actions in Chat */}
          <div className="px-3 py-1.5 bg-stone-50 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-600">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1 text-amber-800 font-semibold hover:underline"
            >
              <Phone className="w-3 h-3" />
              <span>Call 0300 5592299</span>
            </a>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-900"
            >
              <MapPin className="w-3 h-3 text-amber-700" />
              <span>Directions</span>
            </a>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-white border-t border-stone-200 flex items-center gap-2"
          >
            <input
              id="chatbot-input-field"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about menu, location, ordering..."
              className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-700"
            />
            <button
              id="chatbot-submit-btn"
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 bg-amber-700 hover:bg-amber-800 disabled:opacity-40 text-white rounded-xl transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, Trash2, Pin, Search, Plus, Send, 
  Paperclip, Mic, Copy, RefreshCw, Sparkles, User 
} from 'lucide-react';
import { Message, ChatSession } from '../types';
import { ResponseCard } from '../components/shared/ResponseCards';
import { apiUrl } from '../lib/api';

const AICrimeAssistant: React.FC = () => {
  const [sessions, setSessions] = useState<ChatSession[]>([
    { id: 's1', title: 'Show robbery cases in Bengaluru last month', pinned: true },
    { id: 's2', title: 'Cybercrime patterns Mysuru', pinned: false }
  ]);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'm1', role: 'ai', text: 'System terminal active. Query security telemetry vector streams.', timestamp: '10:00 AM', cardType: 'text' }
  ]);
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    "Show robbery cases in Bengaluru last month",
    "Show crime hotspot near Whitefield",
    "Find connected criminals"
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;
    
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(apiUrl('/api/v1/chat/query'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userMsg)
      });
      const data = await response.json();
      setMessages(prev => [...prev, data]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-slate-50 overflow-hidden">
      {/* Session Navigation Workspace */}
      <div className="w-72 bg-white border-r border-gray-200 flex flex-col h-full">
        <div className="p-4 border-b space-y-3">
          <button className="w-full py-2 px-3 border border-[#008DDA] text-[#008DDA] rounded-lg text-xs font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
            <Plus className="h-3.5 w-3.5" /> Launch New Case Thread
          </button>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search conversation tracks..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 border border-gray-200 text-xs rounded-md focus:outline-none focus:border-[#008DDA]"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {sessions.map(s => (
            <div key={s.id} className="group flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer border border-transparent hover:border-gray-100">
              <div className="flex items-center gap-2 overflow-hidden">
                <MessageSquare className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                <span className="text-xs font-medium text-gray-700 truncate">{s.title}</span>
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-gray-400 hover:text-blue-500"><Pin className="h-3 w-3" /></button>
                <button className="text-gray-400 hover:text-red-500"><Trash2 className="h-3 w-3" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Terminal Window Workspace */}
      <div className="flex-1 flex flex-col h-full bg-slate-50 relative">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map(m => (
            <div key={m.id} className={`flex gap-4 max-w-4xl ${m.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center border text-xs font-bold shadow-sm ${m.role === 'user' ? 'bg-slate-800 border-slate-900 text-white' : 'bg-blue-900 border-blue-950 text-amber-400'}`}>
                {m.role === 'user' ? <User className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
              </div>
              <div className="space-y-1.5 max-w-[85%]">
                <div className={`p-3.5 rounded-2xl shadow-sm text-sm leading-relaxed ${m.role === 'user' ? 'bg-[#008DDA] text-white' : 'bg-white border border-gray-200 text-gray-800'}`}>
                  {m.text}
                </div>
                {m.cardType && m.cardType !== 'text' && (
                  <ResponseCard type={m.cardType} data={m.cardData} />
                )}
                <span className="block text-[10px] text-gray-400 font-mono tracking-wide px-1">{m.timestamp}</span>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-4 max-w-xl">
              <div className="h-8 w-8 rounded-full bg-blue-900 flex items-center justify-center text-amber-400 border border-blue-950 text-xs">
                <Sparkles className="h-4 w-4 animate-spin" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggested Prompts Shelf */}
        {messages.length === 1 && (
          <div className="px-6 py-2 flex flex-wrap gap-2 max-w-4xl mx-auto w-full">
            {suggestedPrompts.map((p, idx) => (
              <button 
                key={idx} 
                onClick={() => handleSend(p)}
                className="text-xs border border-gray-300 bg-white hover:bg-blue-50 hover:border-blue-400 text-gray-600 px-3 py-1.5 rounded-full transition-colors font-medium shadow-sm"
              >
                {p}
              </button>
            ))}
          </div>
        )}

        {/* Control Desk Console Input Form */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto relative border border-gray-300 focus-within:border-[#008DDA] rounded-xl bg-white shadow-sm transition-all duration-150">
            <textarea
              rows={2}
              placeholder="Query structural intelligence records, suspect schemas, geospatial insights..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(input);
                }
              }}
              className="w-full resize-none bg-transparent p-3 text-sm focus:outline-none text-gray-800 pr-24"
            />
            <div className="absolute right-3 bottom-3 flex items-center gap-2">
              <button title="Attach File Link" className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg"><Paperclip className="h-4 w-4" /></button>
              <button title="Dictation Audio" className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg"><Mic className="h-4 w-4" /></button>
              <button 
                onClick={() => handleSend(input)}
                className="p-1.5 bg-[#008DDA] hover:bg-[#1E3E62] text-white rounded-lg transition-colors shadow-sm"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICrimeAssistant;

import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export const AIAssistant: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `你是一位資深的海洋生物學家和環境科學專家。請用專業且淺顯易懂的口吻回答以下關於海洋生態、食物鏈或換肉率（FCR）的問題：${question}`,
        config: {
          systemInstruction: "回答請控制在 300 字以內，並適當使用 Emoji 增加可讀性。請繁體中文回答。",
        }
      });
      setAnswer(response.text || '抱歉，我暫時無法回答這個問題。');
    } catch (error) {
      console.error(error);
      setAnswer('連線到海洋專家時發生錯誤，請稍後再試。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl bg-slate-800/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl mt-8 text-white border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-xl">
          <i className="fa-solid fa-robot"></i>
        </div>
        <h3 className="text-xl font-bold">問問海洋專家</h3>
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="例如：為什麼鮪魚的換肉率這麼高？"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && askAI()}
            className="w-full p-3 pr-12 rounded-xl bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-slate-400"
          />
          <button 
            onClick={askAI}
            disabled={loading}
            className="absolute right-2 top-2 w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors disabled:opacity-50"
          >
            {loading ? <i className="fa-solid fa-spinner animate-spin"></i> : <i className="fa-solid fa-paper-plane"></i>}
          </button>
        </div>

        {answer && (
          <div className="bg-slate-700/50 p-4 rounded-xl border-l-4 border-blue-400 animate-fade-in whitespace-pre-wrap leading-relaxed text-sm">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};


import React, { useEffect, useState } from 'react';
import { PyramidData } from '../types';

interface PyramidProps {
  data: PyramidData;
}

export const Pyramid: React.FC<PyramidProps> = ({ data }) => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setPulse(true);
    const timer = setTimeout(() => setPulse(false), 400);
    return () => clearTimeout(timer);
  }, [data]);

  const levels = [
    { 
      id: 'l4', 
      title: '🦈 藍鰭鮪魚', 
      value: data.tunaWeight, 
      width: 'w-1/3', 
      gradient: 'from-rose-400 to-rose-700',
      arrowLabel: `⬇️ 按 FCR 1:${data.fcr} 消耗 ⬇️`
    },
    { 
      id: 'l3', 
      title: '🐟 飼料魚 (鯖魚/沙丁魚)', 
      value: data.feedFishWeight, 
      width: 'w-1/2', 
      gradient: 'from-blue-400 to-blue-700',
      arrowLabel: '⬇️ 自然生態 10倍消耗 ⬇️'
    },
    { 
      id: 'l2', 
      title: '🦐 磷蝦/浮游動物', 
      value: data.krillWeight, 
      width: 'w-2/3', 
      gradient: 'from-yellow-300 to-yellow-500',
      textColor: 'text-slate-800',
      arrowLabel: '⬇️ 自然生態 10倍消耗 ⬇️'
    },
    { 
      id: 'l1', 
      title: '🌿 微細藻類 (生產者)', 
      value: data.algaeWeight, 
      width: 'w-full', 
      gradient: 'from-emerald-400 to-emerald-700'
    }
  ];

  return (
    <div className="w-full flex flex-col items-center gap-2 mt-4">
      {levels.map((level, idx) => (
        <React.Fragment key={level.id}>
          <div 
            className={`
              ${level.width} min-h-[100px] flex flex-col items-center justify-center 
              bg-gradient-to-br ${level.gradient} 
              rounded-2xl shadow-xl p-4 transition-all duration-500
              ${level.textColor || 'text-white'}
              ${pulse ? 'animate-pulse-once' : ''}
            `}
          >
            <div className="text-center font-bold text-sm md:text-base">
              {level.title}
            </div>
            <div className="mt-2 bg-black/30 px-4 py-1 rounded-full text-lg md:text-xl font-black">
              {level.value.toLocaleString()} kg
            </div>
          </div>
          
          {idx < levels.length - 1 && (
            <div className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-xs md:text-sm font-bold shadow-sm backdrop-blur-sm">
              {level.arrowLabel}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

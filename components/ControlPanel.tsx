
import React from 'react';
import { FcrInfo } from '../types';

interface ControlPanelProps {
  tunaWeight: number;
  setTunaWeight: (val: number) => void;
  fcr: number;
  setFcr: (val: number) => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ tunaWeight, setTunaWeight, fcr, setFcr }) => {
  const fcrInfo = React.useMemo<FcrInfo>(() => {
    if (fcr <= 3) {
      return { label: "👍 吳郭魚/雞肉等級 (高效率)", color: "text-green-600", description: "非常環保且高效的肉類來源。" };
    } else if (fcr >= 9 && fcr <= 11) {
      return { label: "⚖️ 標準生態理論值 (10%)", color: "text-gray-500", description: "符合大自然的基本能量遞減規律。" };
    } else if (fcr >= 15) {
      return { label: "⚠️ 養殖鮪魚真實等級 (極高消耗！)", color: "text-red-600", description: "每公斤產量需投入極大的海洋小魚資源。" };
    } else {
      return { label: "🔍 一般肉食性魚類", color: "text-amber-600", description: "典型的食肉性魚類資源消耗量。" };
    }
  }, [fcr]);

  return (
    <div className="w-full max-w-xl bg-white/85 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/50 space-y-6">
      <div className="flex flex-col items-center">
        <label className="text-lg font-bold text-slate-800 mb-2">
          你想養出多少公斤的鮪魚？
        </label>
        <div className="flex items-center gap-3">
          <input 
            type="number" 
            value={tunaWeight}
            onChange={(e) => setTunaWeight(Math.max(1, Number(e.target.value)))}
            className="w-32 p-2 text-2xl font-bold text-center border-4 border-blue-400 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all"
          />
          <span className="text-xl font-bold text-slate-700">kg</span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <label className="text-lg font-bold text-slate-800 mb-2">
          設定換肉率 (FCR)
        </label>
        <input 
          type="range" 
          min="1" 
          max="25" 
          step="0.5" 
          value={fcr}
          onChange={(e) => setFcr(Number(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
        <div className="mt-4 text-center">
          <div className="text-3xl font-black text-orange-500 mb-1">
            1 : {fcr}
          </div>
          <div className={`px-4 py-1 rounded-full bg-slate-100 font-bold inline-block text-sm ${fcrInfo.color}`}>
            {fcrInfo.label}
          </div>
          <p className="mt-2 text-slate-500 text-xs italic">
            {fcrInfo.description}
          </p>
        </div>
      </div>
    </div>
  );
};

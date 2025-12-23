
import React from 'react';

export const EducationalNotes: React.FC = () => {
  return (
    <div className="w-full max-w-2xl bg-white/95 backdrop-blur-sm p-8 rounded-3xl border-l-8 border-rose-500 shadow-2xl mt-12 text-slate-800">
      <h3 className="text-2xl font-bold text-rose-600 mb-6 border-b pb-2">
        <i className="fa-solid fa-flask-vial mr-2"></i>科學小筆記
      </h3>
      <ol className="space-y-4 list-decimal pl-5">
        <li className="pl-2">
          <strong className="text-orange-600">能量流失：</strong> 
          每一層級大約只有 10% 的能量能轉換成肉，其餘 90% 都會變成熱能散失。這就是為什麼自然界的頂級掠食者（如鮪魚、獅子）數量總是如此稀少。
        </li>
        <li className="pl-2">
          <strong className="text-orange-600">養殖的代價：</strong> 
          雖然是「養殖」鮪魚，但我們必須捕撈大量的野生小魚（如鯖魚、沙丁魚）來餵食牠們。這等於是用大量的海洋自然資源來換取極少量的昂貴魚肉。
        </li>
        <li className="pl-2">
          <strong className="text-orange-600">生物累積：</strong> 
          如果底層的藻類含有微量毒素（如重金屬汞），這些毒素不會隨能量散失，而是會一路向上濃縮，最後全部累積在最頂端的那 1 公斤鮪魚體內。
        </li>
        <li className="pl-2">
          <strong className="text-orange-600">FCR 的環境意義：</strong> 
          換肉率（FCR）越高，代表養殖效率越低。鮪魚的 FCR 高達 15~20，意味著每養出 1 公斤鮪魚就要消耗近 20 倍的小魚，這讓牠們成為生態成本極高的「海中牛排」。
        </li>
      </ol>
      <div className="mt-8 pt-4 border-t text-sm text-slate-500 text-center">
        © 2024 海洋生態動態實驗室 | 探索永續發展的未來
      </div>
    </div>
  );
};

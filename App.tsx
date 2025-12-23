
import React, { useState, useMemo } from 'react';
import { ControlPanel } from './components/ControlPanel';
import { Pyramid } from './components/Pyramid';
import { EducationalNotes } from './components/EducationalNotes';
import { AIAssistant } from './components/AIAssistant';
import { PyramidData } from './types';

const App: React.FC = () => {
  const [tunaWeight, setTunaWeight] = useState<number>(10);
  const [fcr, setFcr] = useState<number>(10);

  const data = useMemo<PyramidData>(() => {
    const feedFishWeight = tunaWeight * fcr;
    const krillWeight = feedFishWeight * 10;
    const algaeWeight = krillWeight * 10;
    
    return {
      tunaWeight,
      fcr,
      feedFishWeight,
      krillWeight,
      algaeWeight
    };
  }, [tunaWeight, fcr]);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden pb-20">
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-white/30 backdrop-blur-[2px] -z-10"></div>
      
      <div className="container mx-auto px-4 py-8 flex flex-col items-center max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 drop-shadow-md mb-2">
            🐟 鮪魚換肉率 (FCR) 實驗室
          </h1>
          <p className="text-lg md:text-xl font-semibold text-slate-700">
            調整換肉率，觀察海洋資源的劇烈消耗
          </p>
        </header>

        <main className="w-full flex flex-col items-center gap-8">
          <ControlPanel 
            tunaWeight={tunaWeight} 
            setTunaWeight={setTunaWeight} 
            fcr={fcr} 
            setFcr={setFcr} 
          />
          
          <Pyramid data={data} />
          
          <AIAssistant />
          
          <EducationalNotes />
        </main>
      </div>
    </div>
  );
};

export default App;

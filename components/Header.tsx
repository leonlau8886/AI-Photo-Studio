import React from 'react';
import { Camera } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 border-b border-studio-700 bg-studio-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-studio-accent rounded-lg shadow-lg shadow-studio-accent/20">
            <Camera className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">AI Photo Studio</h1>
            <p className="text-xs text-gray-400">Powered by Gemini Nano Banana</p>
          </div>
        </div>
      </div>
    </header>
  );
};
import React from 'react';
import { Download, Share2, RefreshCw, AlertCircle } from 'lucide-react';
import { GeneratedImage, StyleConfig } from '../types';

interface ResultCardProps {
  styleConfig: StyleConfig;
  result?: GeneratedImage;
  onRetry: (styleId: string) => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ styleConfig, result, onRetry }) => {
  const isLoading = result?.status === 'loading';
  const isError = result?.status === 'error';
  const isSuccess = result?.status === 'success';

  const handleDownload = () => {
    if (result?.imageUrl) {
      const link = document.createElement('a');
      link.href = result.imageUrl;
      link.download = `studio_${styleConfig.id}_${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col gap-3 group">
      <div className={`
        relative overflow-hidden rounded-xl bg-studio-800 border border-studio-700 shadow-xl
        ${styleConfig.aspectRatio === '16:9' ? 'aspect-video' : 'aspect-[3/4]'}
      `}>
        {/* Empty State */}
        {!result && (
           <div className="absolute inset-0 flex items-center justify-center text-gray-600">
             <span className="text-sm">Waiting for upload...</span>
           </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-studio-800 z-10">
            <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-transparent via-studio-700/30 to-transparent animate-shimmer" 
                 style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite linear' }} />
             <div className="z-10 flex flex-col items-center gap-2">
               <RefreshCw className="w-6 h-6 text-studio-accent animate-spin" />
               <span className="text-xs text-studio-accent font-medium uppercase tracking-wider">Generating</span>
             </div>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-studio-800/90 p-4 text-center z-10">
            <AlertCircle className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-xs text-red-400 mb-3">{result.error || 'Generation failed'}</p>
            <button 
              onClick={() => onRetry(styleConfig.id)}
              className="px-3 py-1.5 bg-studio-700 hover:bg-studio-600 rounded text-xs font-medium transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Success State */}
        {isSuccess && result?.imageUrl && (
          <>
            <img 
              src={result.imageUrl} 
              alt={styleConfig.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay Actions */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
              <span className="text-xs font-medium text-white/90 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                {styleConfig.name}
              </span>
              <button 
                onClick={handleDownload}
                className="p-2 bg-white text-black rounded-full hover:bg-studio-accent hover:text-white transition-colors shadow-lg"
                title="Download"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>

      <div className="px-1">
        <h3 className="text-sm font-medium text-gray-200">{styleConfig.name}</h3>
        <p className="text-xs text-gray-500 line-clamp-1">{styleConfig.description}</p>
      </div>
    </div>
  );
};
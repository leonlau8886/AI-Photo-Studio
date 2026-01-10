import React, { useState } from 'react';
import { Header } from './components/Header';
import { UploadArea } from './components/UploadArea';
import { ResultCard } from './components/ResultCard';
import { STYLE_CONFIGS } from './constants';
import { GeneratedImage, PhotoCategory, PhotoMode } from './types';
import { fileToBase64, generateStyledPhoto } from './services/geminiService';
import { Sparkles, Heart, User } from 'lucide-react';

const App: React.FC = () => {
  const [mode, setMode] = useState<PhotoMode>('individual');
  const [sourceImages, setSourceImages] = useState<string[]>([]);
  const [results, setResults] = useState<Record<string, GeneratedImage>>({});
  const [isProcessingSource, setIsProcessingSource] = useState(false);

  // Group styles by category
  const categories = Object.values(PhotoCategory);

  const handleImagesSelect = async (files: File[]) => {
    setIsProcessingSource(true);
    setSourceImages([]);
    setResults({}); // Reset previous results

    try {
      const base64Promises = files.map(file => fileToBase64(file));
      const base64Images = await Promise.all(base64Promises);
      setSourceImages(base64Images);
      
      // Filter styles based on current mode
      const activeStyles = STYLE_CONFIGS.filter(s => s.mode === mode);

      // Initialize placeholders
      const initialResults: Record<string, GeneratedImage> = {};
      activeStyles.forEach(style => {
        initialResults[style.id] = {
          id: style.id,
          styleId: style.id,
          status: 'pending'
        };
      });
      setResults(initialResults);

      // Start generation for all styles
      activeStyles.forEach(style => {
        generateSingleStyle(style.id, base64Images);
      });

    } catch (error) {
      console.error("Error processing source images", error);
      alert("Failed to process images. Please try again.");
    } finally {
      setIsProcessingSource(false);
    }
  };

  const generateSingleStyle = async (styleId: string, base64Images: string[]) => {
    const config = STYLE_CONFIGS.find(s => s.id === styleId);
    if (!config) return;

    // Set loading state
    setResults(prev => ({
      ...prev,
      [styleId]: { ...prev[styleId], status: 'loading', error: undefined }
    }));

    try {
      const generatedImageUrl = await generateStyledPhoto(
        base64Images,
        config.promptModifier,
        config.aspectRatio
      );

      setResults(prev => ({
        ...prev,
        [styleId]: { 
          ...prev[styleId], 
          status: 'success', 
          imageUrl: generatedImageUrl 
        }
      }));
    } catch (error) {
      setResults(prev => ({
        ...prev,
        [styleId]: { 
          ...prev[styleId], 
          status: 'error', 
          error: 'Failed to generate' 
        }
      }));
    }
  };

  const handleRetry = (styleId: string) => {
    if (sourceImages.length > 0) {
      generateSingleStyle(styleId, sourceImages);
    }
  };

  const activeStyles = STYLE_CONFIGS.filter(s => s.mode === mode);
  const activeCategories = categories.filter(cat => 
    activeStyles.some(s => s.category === cat)
  );

  return (
    <div className="min-h-screen bg-studio-900 text-white pb-20">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Mode Switcher */}
        <div className="flex justify-center mt-8 mb-4">
          <div className="bg-studio-800 p-1 rounded-full flex items-center shadow-lg border border-studio-700">
             <button
                onClick={() => { setMode('individual'); setSourceImages([]); setResults({}); }}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${mode === 'individual' ? 'bg-studio-accent text-white shadow' : 'text-gray-400 hover:text-white'}`}
             >
                <User className="w-4 h-4" />
                Individual Portrait
             </button>
             <button
                onClick={() => { setMode('couple'); setSourceImages([]); setResults({}); }}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${mode === 'couple' ? 'bg-pink-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}
             >
                <Heart className="w-4 h-4" />
                Wedding Couple
             </button>
          </div>
        </div>

        {/* Upload Section */}
        <div className="py-4">
          <UploadArea 
            onImagesSelect={handleImagesSelect} 
            isProcessing={isProcessingSource}
            mode={mode}
          />
        </div>

        {/* Source Image Preview */}
        {sourceImages.length > 0 && (
           <div className="flex justify-center mb-12 gap-4">
             {sourceImages.map((src, idx) => (
                <div key={idx} className="bg-studio-800 p-2 rounded-lg border border-studio-700 flex items-center gap-3 animate-fade-in">
                  <img src={src} alt={`Source ${idx}`} className="w-12 h-12 rounded object-cover" />
                  <div className="text-sm pr-2">
                    <p className="text-gray-300 font-medium">{mode === 'couple' && idx === 0 ? 'Groom' : mode === 'couple' && idx === 1 ? 'Bride' : 'Subject'}</p>
                  </div>
                </div>
             ))}
           </div>
        )}

        {/* Results Grid */}
        {sourceImages.length > 0 && (
          <div className="space-y-16 animate-fade-in-up">
            {activeCategories.map((category) => {
              const categoryStyles = activeStyles.filter(s => s.category === category);
              if (categoryStyles.length === 0) return null;

              return (
                <section key={category}>
                  <div className="flex items-center gap-2 mb-6 border-b border-studio-800 pb-2">
                    <Sparkles className="w-5 h-5 text-studio-accent" />
                    <h2 className="text-xl font-bold text-white">{category}</h2>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categoryStyles.map((style) => (
                      <ResultCard
                        key={style.id}
                        styleConfig={style}
                        result={results[style.id]}
                        onRetry={handleRetry}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {sourceImages.length === 0 && (
          <div className="mt-12 text-center text-gray-600">
             <p>Select a mode and upload photos to generate your studio shots.</p>
          </div>
        )}
      </main>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
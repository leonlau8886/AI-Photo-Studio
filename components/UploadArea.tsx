import React, { useRef, useState } from 'react';
import { Upload, Loader2, User, Users } from 'lucide-react';
import { PhotoMode } from '../types';

interface UploadAreaProps {
  onImagesSelect: (files: File[]) => void;
  isProcessing: boolean;
  mode: PhotoMode;
}

const SingleUploadBox: React.FC<{
  label: string;
  icon: React.ReactNode;
  onSelect: (file: File) => void;
  isLoading: boolean;
  activeFile: File | null;
}> = ({ label, icon, onSelect, isLoading, activeFile }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onSelect(e.dataTransfer.files[0]);
    }
  };

  return (
    <div 
      className={`relative w-full h-64 rounded-xl border-2 border-dashed transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center justify-center p-4
        ${dragActive 
          ? 'border-studio-accent bg-studio-accent/10' 
          : activeFile 
            ? 'border-studio-accent/50 bg-studio-800'
            : 'border-studio-700 hover:border-studio-accent/50 hover:bg-studio-800'
        }
        ${isLoading ? 'opacity-50 pointer-events-none' : ''}
      `}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={(e) => e.target.files?.[0] && onSelect(e.target.files[0])}
        disabled={isLoading}
      />
      
      {activeFile ? (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
           <img 
             src={URL.createObjectURL(activeFile)} 
             alt="Preview" 
             className="h-40 w-40 object-cover rounded-full mb-3 border-2 border-studio-accent shadow-lg" 
           />
           <p className="text-sm font-medium text-studio-accent">Image Selected</p>
           <p className="text-xs text-gray-400 mt-1">{activeFile.name}</p>
        </div>
      ) : (
        <>
          <div className="p-3 rounded-full bg-studio-700/50 mb-3 text-gray-400">
            {icon}
          </div>
          <h3 className="text-sm font-semibold text-white mb-1">{label}</h3>
          <p className="text-xs text-gray-500 text-center">Drag & drop or click</p>
        </>
      )}
    </div>
  );
};

export const UploadArea: React.FC<UploadAreaProps> = ({ onImagesSelect, isProcessing, mode }) => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);

  const handleGenerate = () => {
    if (mode === 'individual' && file1) {
      onImagesSelect([file1]);
    } else if (mode === 'couple' && file1 && file2) {
      onImagesSelect([file1, file2]);
    }
  };

  const reset = () => {
    setFile1(null);
    setFile2(null);
  };

  // Reset when mode changes
  React.useEffect(() => {
    reset();
  }, [mode]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <div className={`grid gap-6 ${mode === 'couple' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-xl mx-auto'}`}>
        
        {/* Slot 1: Main Subject or Groom */}
        <SingleUploadBox 
          label={mode === 'couple' ? "Upload Groom / Man" : "Upload Portrait"}
          icon={mode === 'couple' ? <User className="w-6 h-6" /> : <Upload className="w-6 h-6" />}
          onSelect={setFile1}
          isLoading={isProcessing}
          activeFile={file1}
        />

        {/* Slot 2: Bride (Only for couple mode) */}
        {mode === 'couple' && (
          <SingleUploadBox 
            label="Upload Bride / Woman"
            icon={<User className="w-6 h-6" />}
            onSelect={setFile2}
            isLoading={isProcessing}
            activeFile={file2}
          />
        )}
      </div>

      {/* Action Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleGenerate}
          disabled={isProcessing || (mode === 'individual' ? !file1 : (!file1 || !file2))}
          className={`
            px-8 py-3 rounded-full font-semibold text-white shadow-lg flex items-center gap-2 transition-all
            ${(mode === 'individual' ? file1 : (file1 && file2)) && !isProcessing
              ? 'bg-studio-accent hover:bg-studio-accent/90 hover:scale-105 cursor-pointer' 
              : 'bg-studio-700 text-gray-400 cursor-not-allowed'}
          `}
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing Images...
            </>
          ) : (
            <>
              <Users className="w-5 h-5" />
              Generate {mode === 'couple' ? 'Wedding Photos' : 'Portraits'}
            </>
          )}
        </button>
      </div>
    </div>
  );
};
export type PhotoMode = 'individual' | 'couple';

export interface StyleConfig {
  id: string;
  category: string;
  name: string;
  description: string;
  promptModifier: string;
  aspectRatio: string; // "1:1" | "3:4" | "4:3" | "9:16" | "16:9"
  mode: PhotoMode;
}

export interface GeneratedImage {
  id: string;
  styleId: string;
  status: 'pending' | 'loading' | 'success' | 'error';
  imageUrl?: string;
  error?: string;
}

export enum PhotoCategory {
  ID_PHOTO = 'Professional ID',
  FASHION = 'Fashion & Art',
  CINEMATIC = 'Cinematic',
  WEDDING_HOTEL = 'Luxury Hotel',
  WEDDING_BEACH = 'Sanya Beach',
  WEDDING_NATURE = 'Guilin Scenery',
  WEDDING_CAMPUS = 'Campus Youth',
  WEDDING_CHINESE = 'New Chinese Style'
}
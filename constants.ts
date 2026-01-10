import { StyleConfig, PhotoCategory } from './types';

export const STYLE_CONFIGS: StyleConfig[] = [
  // --- INDIVIDUAL STYLES ---
  {
    id: 'id-blue',
    category: PhotoCategory.ID_PHOTO,
    name: 'Professional (Blue)',
    description: 'Standard ID photo with blue background',
    promptModifier: 'Professional headshot for resume, formal business attire, confident expression, solid dark blue background, even studio lighting',
    aspectRatio: '3:4',
    mode: 'individual'
  },
  {
    id: 'id-red',
    category: PhotoCategory.ID_PHOTO,
    name: 'Professional (Red)',
    description: 'Standard ID photo with red background',
    promptModifier: 'Professional headshot, formal attire, confident expression, solid red background, soft studio lighting',
    aspectRatio: '3:4',
    mode: 'individual'
  },
  {
    id: 'id-white',
    category: PhotoCategory.ID_PHOTO,
    name: 'Professional (White)',
    description: 'Standard ID photo with white background',
    promptModifier: 'Professional headshot, formal business attire, neutral expression, pure white background, high key lighting',
    aspectRatio: '3:4',
    mode: 'individual'
  },
  {
    id: 'id-gray',
    category: PhotoCategory.ID_PHOTO,
    name: 'Professional (Gray)',
    description: 'Professional photo with gray gradient',
    promptModifier: 'Professional corporate headshot, modern business suit, professional smile, smooth gray gradient background, cinematic lighting',
    aspectRatio: '3:4',
    mode: 'individual'
  },
  {
    id: 'fashion',
    category: PhotoCategory.FASHION,
    name: 'High Fashion',
    description: 'Trendy fashion photography',
    promptModifier: 'High fashion editorial shot, wearing trendy designer clothing, dynamic pose, dramatic studio lighting, vogue magazine style, sharp focus',
    aspectRatio: '3:4',
    mode: 'individual'
  },
  {
    id: 'art-gallery',
    category: PhotoCategory.FASHION,
    name: 'Lost in Art Gallery',
    description: 'Atmospheric museum shot',
    promptModifier: 'A person standing in a modern art gallery looking at a large abstract painting, rear or side view profile, soft ambient lighting, bokeh effect, contemplative mood, "Lost in the Art Gallery" theme',
    aspectRatio: '3:4',
    mode: 'individual'
  },
  {
    id: 'bw-art',
    category: PhotoCategory.FASHION,
    name: 'B&W Art Portrait',
    description: 'Classic high-contrast black and white',
    promptModifier: 'Black and white artistic portrait, high contrast, dramatic shadows (chiaroscuro), classic photography style, emotional depth, intense gaze',
    aspectRatio: '3:4',
    mode: 'individual'
  },
  {
    id: 'magazine',
    category: PhotoCategory.CINEMATIC,
    name: 'American Magazine',
    description: 'Magazine cover style',
    promptModifier: 'Cover of a famous American fashion magazine, bold typography elements in background (optional), vibrant colors, stylish celebrity look, confident pose, rich textures',
    aspectRatio: '3:4',
    mode: 'individual'
  },
  {
    id: 'cinematic',
    category: PhotoCategory.CINEMATIC,
    name: 'Film Portrait',
    description: 'Movie scene aesthetic',
    promptModifier: 'Cinematic movie close-up, 35mm film grain, shallow depth of field, anamorphic lens flares, moody color grading, dramatic narrative lighting, looks like a scene from a blockbuster movie',
    aspectRatio: '16:9',
    mode: 'individual'
  },

  // --- COUPLE / WEDDING STYLES ---
  
  // 1. Hotel Luxury
  {
    id: 'hotel-ballroom',
    category: PhotoCategory.WEDDING_HOTEL,
    name: 'Grand Ballroom',
    description: 'Luxury hotel ballroom with chandeliers',
    promptModifier: 'Wedding photo of a couple in a luxurious hotel ballroom, crystal chandeliers, warm golden lighting, elegant tuxedo and white wedding gown, romantic atmosphere, wide angle',
    aspectRatio: '16:9',
    mode: 'couple'
  },
  {
    id: 'hotel-staircase',
    category: PhotoCategory.WEDDING_HOTEL,
    name: 'Grand Staircase',
    description: 'Classic spiral staircase shot',
    promptModifier: 'Wedding photo, couple posing on a grand spiral staircase in a 5-star hotel, long train of the dress flowing down, dramatic overhead lighting, architectural elegance',
    aspectRatio: '3:4',
    mode: 'couple'
  },
  {
    id: 'hotel-window',
    category: PhotoCategory.WEDDING_HOTEL,
    name: 'City View Suite',
    description: 'Silhouette against city night view',
    promptModifier: 'Wedding photo, couple standing by a floor-to-ceiling window in a luxury hotel suite, bokeh city lights in background, romantic silhouette, intimate mood',
    aspectRatio: '3:4',
    mode: 'couple'
  },
  {
    id: 'hotel-champagne',
    category: PhotoCategory.WEDDING_HOTEL,
    name: 'Celebration Toast',
    description: 'Intimate toast in private lounge',
    promptModifier: 'Wedding photo, couple holding champagne glasses in a private luxury hotel lounge, velvet furniture, soft focus, joyful expressions, high-end lifestyle',
    aspectRatio: '16:9',
    mode: 'couple'
  },

  // 2. Sanya Beach
  {
    id: 'sanya-sunset',
    category: PhotoCategory.WEDDING_BEACH,
    name: 'Sanya Sunset',
    description: 'Golden hour at the beach',
    promptModifier: 'Wedding photo in Sanya, couple walking hand in hand on the beach at sunset, golden hour lighting, reflection on wet sand, flowing white dress, tropical vibe',
    aspectRatio: '16:9',
    mode: 'couple'
  },
  {
    id: 'sanya-arch',
    category: PhotoCategory.WEDDING_BEACH,
    name: 'Floral Arch',
    description: 'Ceremony arch by the sea',
    promptModifier: 'Wedding photo, couple kissing under a floral wedding arch by the blue ocean in Sanya, bright daylight, clear blue sky, white roses, romantic and airy',
    aspectRatio: '3:4',
    mode: 'couple'
  },
  {
    id: 'sanya-underwater',
    category: PhotoCategory.WEDDING_BEACH,
    name: 'Tropical Palms',
    description: 'Surrounded by palm trees',
    promptModifier: 'Wedding photo, couple framed by tropical coconut palm trees in Sanya, sunlight filtering through leaves, bright vivid colors, vacation wedding style',
    aspectRatio: '3:4',
    mode: 'couple'
  },
  {
    id: 'sanya-veil',
    category: PhotoCategory.WEDDING_BEACH,
    name: 'Flying Veil',
    description: 'Dramatic long veil in the wind',
    promptModifier: 'Wedding photo, dramatic shot of the bride\'s long veil flying in the sea breeze, groom holding her waist, Sanya coastline background, dynamic motion, epic scale',
    aspectRatio: '16:9',
    mode: 'couple'
  },

  // 3. Guilin Nature
  {
    id: 'guilin-raft',
    category: PhotoCategory.WEDDING_NATURE,
    name: 'Li River Raft',
    description: 'Traditional bamboo raft',
    promptModifier: 'Wedding photo in Guilin, couple standing on a bamboo raft on the Li River, karst mountains in background, reflection in water, misty ethereal atmosphere, Chinese ink painting aesthetic',
    aspectRatio: '16:9',
    mode: 'couple'
  },
  {
    id: 'guilin-mountains',
    category: PhotoCategory.WEDDING_NATURE,
    name: 'Mountain Peak',
    description: 'Panoramic mountain view',
    promptModifier: 'Wedding photo, couple standing on a viewing platform overlooking Guilin karst peaks, dramatic clouds, wide shot, majestic nature, adventurous mood',
    aspectRatio: '16:9',
    mode: 'couple'
  },
  {
    id: 'guilin-green',
    category: PhotoCategory.WEDDING_NATURE,
    name: 'Rice Terraces',
    description: 'Lush green fields',
    promptModifier: 'Wedding photo, couple walking through lush green rice terraces in Longji, vibrant greenery, soft natural light, peaceful and organic',
    aspectRatio: '3:4',
    mode: 'couple'
  },
  
  // 4. School / Campus
  {
    id: 'school-library',
    category: PhotoCategory.WEDDING_CAMPUS,
    name: 'Library Romance',
    description: 'Quiet moment between bookshelves',
    promptModifier: 'Wedding photo, couple in a university library, between bookshelves, bride wearing a simple white dress, groom in smart casual, soft warm light, nostalgic youth vibe',
    aspectRatio: '3:4',
    mode: 'couple'
  },
  {
    id: 'school-track',
    category: PhotoCategory.WEDDING_CAMPUS,
    name: 'Running Track',
    description: 'Playful outdoor track',
    promptModifier: 'Wedding photo, couple sitting on a red running track at a school stadium, blue sky, playful interaction, wearing white sneakers with wedding outfits, sunny day',
    aspectRatio: '16:9',
    mode: 'couple'
  },
  {
    id: 'school-classroom',
    category: PhotoCategory.WEDDING_CAMPUS,
    name: 'Classroom Desk',
    description: 'Sharing a desk',
    promptModifier: 'Wedding photo, couple sitting at a wooden classroom desk, sunbeams coming through window, chalkboard in background, "Love" written on board, sweet and innocent',
    aspectRatio: '3:4',
    mode: 'couple'
  },
  {
    id: 'school-bikes',
    category: PhotoCategory.WEDDING_CAMPUS,
    name: 'Bicycle Date',
    description: 'Riding bikes on campus',
    promptModifier: 'Wedding photo, couple riding vintage bicycles on a tree-lined campus road, cherry blossoms falling, dynamic motion, laughing, youth film aesthetic',
    aspectRatio: '16:9',
    mode: 'couple'
  },

  // 5. New Chinese Style
  {
    id: 'chinese-walls',
    category: PhotoCategory.WEDDING_CHINESE,
    name: 'Red Palace Walls',
    description: 'Forbidden City inspired',
    promptModifier: 'New Chinese style wedding photo, couple standing in front of vermilion red palace walls, gold roof details, wearing modern embroidered Cheongsam and Tang suit, regal and symmetrical',
    aspectRatio: '3:4',
    mode: 'couple'
  },
  {
    id: 'chinese-fan',
    category: PhotoCategory.WEDDING_CHINESE,
    name: 'Paper Fan',
    description: 'Artistic shot with fans',
    promptModifier: 'New Chinese wedding photo, studio shot, couple holding traditional paper fans, background with calligraphy elements, dramatic red and black color palette, high fashion lighting',
    aspectRatio: '3:4',
    mode: 'couple'
  },
  {
    id: 'chinese-garden',
    category: PhotoCategory.WEDDING_CHINESE,
    name: 'Suzhou Garden',
    description: 'Traditional garden pavilion',
    promptModifier: 'Wedding photo in a traditional Suzhou garden, circular moon gate, pavilion, willow trees, couple in elegant fusion wedding attire, serene and poetic',
    aspectRatio: '16:9',
    mode: 'couple'
  },
  {
    id: 'chinese-lanterns',
    category: PhotoCategory.WEDDING_CHINESE,
    name: 'Lantern Night',
    description: 'Glowing lanterns at night',
    promptModifier: 'Wedding photo, couple surrounded by hundreds of glowing red lanterns at night, warm light, festive atmosphere, traditional Chinese wedding theme',
    aspectRatio: '3:4',
    mode: 'couple'
  }
];
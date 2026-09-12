export interface GalleryItem {
  id: string;
  title: string;
  category: 'Karahi' | 'Mutton' | 'Kababs' | 'Naan' | 'Dining';
  imageUrl: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedPrompts?: string[];
}

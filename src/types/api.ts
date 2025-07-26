export interface AIResponse {
  estimated_volume_m3: number;
  estimated_distance_km: number;
  from: string;
  to: string;
  date: string;
  comments?: string;
}
export interface ChatMessage {
  id: string;
  content: string;
  timestamp: string;
  sender: 'user' | 'ai';
}
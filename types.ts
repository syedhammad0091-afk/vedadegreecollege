export interface Course {
  id: string;
  title: string;
  degree: string;
  duration: string;
  description: string;
  icon: string;
  features: string[];
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price?: number;
  inStock: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio?: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  completedDate: string;
  client?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

export interface QuoteRequest extends ContactForm {
  company: string;
  serviceType: string;
  budget?: string;
  timeline?: string;
}
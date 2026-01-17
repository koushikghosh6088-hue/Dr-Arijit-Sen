
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  bengaliTitle: string;
  description: string;
  icon: React.ReactNode;
  fullDescription: string;
  symptoms: string[];
  treatments: string[];
  prevention: string[];
}

export interface Qualification {
  institution: string;
  degree: string;
  period: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  content: string;
  excerpt: string;
  author: string;
}

export interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  date: string;
  type: 'offline' | 'online';
  problem: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  location?: string;
}

export interface UserAppointment {
  id: string;
  date: string;
  time: string;
  type: 'Offline' | 'Online';
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  doctorName: string;
}

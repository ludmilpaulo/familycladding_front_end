
export const baseAPI = "https://lopes.pythonanywhere.com"

import axios from 'axios';
import { ContactFormData, Service, TeamMemberData, WhyChooseUsData } from '@/types';

import { Project } from '@/types';

export const fetchServices = async (): Promise<Service[]> => {
  const res = await fetch(`${baseAPI}/service/services/`);
  const data = await res.json();
  return data;
};


// Function to fetch all CarouselListCreateAPIView
export const CarouselListCreateAPIView = async () => {
  try {
    const response = await axios.get(`${baseAPI}/info/carousels/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};






const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`${baseAPI}/project/projects/`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data: Project[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export { fetchProjects };

export interface AboutUsData {
  id: number;
  title: string;
  logo: string;
  backgroundImage: string;
  about: string;
  born_date: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  linkedin: string | null;
  facebook: string;
  twitter: string;
  instagram: string;
}

export async function fetchAboutUsData(): Promise<AboutUsData | null> {
  try {
    const response = await fetch(`${baseAPI}/info/aboutus/`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    // Assuming the API returns an array and we want the first item
    return data[0] || null;
  } catch (error) {
    console.error('Error fetching about us data:', error);
    return null;
  }
}






export const fetchTeamData = async (): Promise<TeamMemberData[]> => {
  const response = await fetch(`${baseAPI}/info/teams/`);
  const data = await response.json();
  return data;
};

export const fetchWhyChooseUsData = async (): Promise<WhyChooseUsData> => {
  const response = await fetch(`${baseAPI}/info/whychooseus/`);
  const data = await response.json();
  return data;
};

export const submitContactForm = async (formData: ContactFormData): Promise<void> => {
  await fetch(`${baseAPI}/info/contacts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
};




export interface Testimonial {
  id: number;
  author: string;
  position: string;
  company: string;
  image: string;
  content: string;
  stars: number;
}

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const response = await axios.get<Testimonial[]>(`${baseAPI}/info/testimonials/`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch testimonials');
  }
};

export const postTestimonial = async (formData: FormData): Promise<void> => {
  try {
    await axios.post(`${baseAPI}/info/testimonials/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    throw new Error('Failed to post testimonial');
  }
};


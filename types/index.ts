// types/index.ts
export interface Service {
    id: number;
    title: string;
    logo: string;
    description: string;
    price: number;
  }
 

// types.ts

// Define a type for project images
interface ProjectImage {
  image: string; // URL to the image
}

// Define a type for projects
interface Project {
  id: number;
  name: string;
  description: string;
  start_date: string; // Assuming it's in ISO date string format (e.g., "2024-04-23")
  end_date: string; // Assuming it's in ISO date string format (e.g., "2024-04-30")
  pictures: ProjectImage[]; // Array of project images
}

export type { Project, ProjectImage };


export interface ContactFormData {
    subject : string;
    name: string;
    email: string;
    company: string;
    address: string;
    phone : string;
    message: string;
}

export interface WhyChooseUsData {
  title: string;
  content: string;
}

export interface TeamMemberData {
  id : number;
  name: string;
  title: string;
  bio: string;
  image: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

export interface AboutUsData {
  title: string;
  logo: string;
  backgroundImage: string;
  about: string;
  born_date: string;
  address: string;
  phone: string;
  email: string;
  whatsapp?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

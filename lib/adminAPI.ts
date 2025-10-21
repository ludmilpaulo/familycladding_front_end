export const baseAPI = "https://lopes.pythonanywhere.com";

// Generic CRUD operations
export const adminAPI = {
  // GET all items
  getAll: async (endpoint: string) => {
    const response = await fetch(`${baseAPI}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
      },
    });
    if (!response.ok) throw new Error('Failed to fetch data');
    return response.json();
  },

  // GET single item
  getOne: async (endpoint: string, id: number) => {
    const response = await fetch(`${baseAPI}${endpoint}${id}/`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
      },
    });
    if (!response.ok) throw new Error('Failed to fetch data');
    return response.json();
  },

  // CREATE item
  create: async (endpoint: string, data: any) => {
    const response = await fetch(`${baseAPI}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create item');
    return response.json();
  },

  // UPDATE item
  update: async (endpoint: string, id: number, data: any) => {
    const response = await fetch(`${baseAPI}${endpoint}${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update item');
    return response.json();
  },

  // DELETE item
  delete: async (endpoint: string, id: number) => {
    const response = await fetch(`${baseAPI}${endpoint}${id}/`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
      },
    });
    if (!response.ok) throw new Error('Failed to delete item');
  },

  // Upload file
  uploadFile: async (endpoint: string, formData: FormData) => {
    const response = await fetch(`${baseAPI}${endpoint}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
      },
      body: formData,
    });
    if (!response.ok) throw new Error('Failed to upload file');
    return response.json();
  },

  // Invoice specific functions
  sendInvoice: async (invoiceId: number) => {
    const response = await fetch(`${baseAPI}/invoice/invoices/${invoiceId}/send/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
      },
    });
    if (!response.ok) throw new Error('Failed to send invoice');
    return response.json();
  },

  markInvoicePaid: async (invoiceId: number) => {
    const response = await fetch(`${baseAPI}/invoice/invoices/${invoiceId}/mark-paid/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
      },
    });
    if (!response.ok) throw new Error('Failed to mark invoice as paid');
    return response.json();
  },
};

// Specific API endpoints
export const adminEndpoints = {
  about: '/info/aboutus/',
  carousel: '/info/carousels/',
  images: '/info/images/',
  services: '/service/services/',
  projects: '/project/projects/',
  team: '/info/teams/',
  testimonials: '/info/testimonials/',
  whyChooseUs: '/info/whychooseus/',
  contacts: '/info/contacts/',
  invoices: '/invoice/invoices/',
};

// Types
export interface AboutUs {
  id: number;
  title: string;
  logo?: string;
  backgroundImage?: string;
  about: string;
  born_date?: string;
  address?: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

export interface Carousel {
  id: number;
  title: string;
  sub_title: string;
  image: Image[];
}

export interface Image {
  id: number;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  logo?: string;
  description: string;
  price?: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  pictures: ProjectImage[];
}

export interface ProjectImage {
  id: number;
  image: string;
}

export interface Team {
  id: number;
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

export interface Testimonial {
  id: number;
  author: string;
  position: string;
  company: string;
  image: string;
  content: string;
  stars: number;
}

export interface WhyChooseUs {
  id: number;
  title: string;
  content: string;
}

export interface Contact {
  id: number;
  subject: string;
  name: string;
  email: string;
  address: string;
  company: string;
  phone: string;
  message: string;
  timestamp: string;
}

export interface InvoiceItem {
  id: number;
  description: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

export interface Invoice {
  id: number;
  invoice_number: string;
  client_name: string;
  client_email: string;
  client_address: string;
  client_phone?: string;
  issue_date: string;
  due_date: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  subtotal: number;
  tax_rate: number;
  tax_amount: number;
  total_amount: number;
  notes?: string;
  terms_conditions?: string;
  created_at: string;
  updated_at: string;
  sent_at?: string;
  paid_at?: string;
  items: InvoiceItem[];
}

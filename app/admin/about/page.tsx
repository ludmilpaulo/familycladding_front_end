"use client";
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import CRUDTable from '@/components/CRUDTable';

const AboutUsAdmin: React.FC = () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'address', label: 'Address' },
    {
      key: 'logo',
      label: 'Logo',
      render: (value: string) => (
        value ? (
          <img src={`https://lopes.pythonanywhere.com${value}`} alt="Logo" className="w-16 h-16 object-cover rounded" />
        ) : (
          <span className="text-gray-400">No logo</span>
        )
      ),
    },
  ];

  const formFields = [
    { key: 'title', label: 'Title', type: 'text' as const, required: true },
    { key: 'about', label: 'About Content', type: 'textarea' as const, required: true },
    { key: 'email', label: 'Email', type: 'email' as const },
    { key: 'phone', label: 'Phone', type: 'text' as const },
    { key: 'address', label: 'Address', type: 'text' as const },
    { key: 'born_date', label: 'Founded Date', type: 'date' as const },
    { key: 'logo', label: 'Logo', type: 'file' as const },
    { key: 'backgroundImage', label: 'Background Image', type: 'file' as const },
    { key: 'whatsapp', label: 'WhatsApp URL', type: 'url' as const },
    { key: 'linkedin', label: 'LinkedIn URL', type: 'url' as const },
    { key: 'facebook', label: 'Facebook URL', type: 'url' as const },
    { key: 'twitter', label: 'Twitter URL', type: 'url' as const },
    { key: 'instagram', label: 'Instagram URL', type: 'url' as const },
  ];

  return (
    <AdminLayout>
      <CRUDTable
        endpoint="/info/aboutus/"
        title="About Us"
        columns={columns}
        formFields={formFields}
      />
    </AdminLayout>
  );
};

export default AboutUsAdmin;

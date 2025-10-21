"use client";
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import CRUDTable from '@/components/CRUDTable';

const ServicesAdmin: React.FC = () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    { key: 'price', label: 'Price' },
    {
      key: 'logo',
      label: 'Logo',
      render: (value: string) => (
        value ? (
          <img src={`https://lopes.pythonanywhere.com${value}`} alt="Service Logo" className="w-16 h-16 object-cover rounded" />
        ) : (
          <span className="text-gray-400">No logo</span>
        )
      ),
    },
    {
      key: 'description',
      label: 'Description',
      render: (value: string) => (
        <div className="max-w-xs truncate" title={value}>
          {value?.replace(/<[^>]*>/g, '') || 'No description'}
        </div>
      ),
    },
  ];

  const formFields = [
    { key: 'title', label: 'Service Title', type: 'text' as const, required: true },
    { key: 'description', label: 'Description', type: 'textarea' as const, required: true },
    { key: 'price', label: 'Price', type: 'number' as const },
    { key: 'logo', label: 'Service Logo', type: 'file' as const },
  ];

  return (
    <AdminLayout>
      <CRUDTable
        endpoint="/service/services/"
        title="Services"
        columns={columns}
        formFields={formFields}
      />
    </AdminLayout>
  );
};

export default ServicesAdmin;

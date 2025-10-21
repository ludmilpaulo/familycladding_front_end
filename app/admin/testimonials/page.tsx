"use client";
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import CRUDTable from '@/components/CRUDTable';

const TestimonialsAdmin: React.FC = () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'author', label: 'Author' },
    { key: 'position', label: 'Position' },
    { key: 'company', label: 'Company' },
    { key: 'stars', label: 'Rating' },
    {
      key: 'image',
      label: 'Photo',
      render: (value: string) => (
        value ? (
          <img src={`https://lopes.pythonanywhere.com${value}`} alt="Testimonial Author" className="w-16 h-16 object-cover rounded-full" />
        ) : (
          <span className="text-gray-400">No photo</span>
        )
      ),
    },
    {
      key: 'content',
      label: 'Testimonial',
      render: (value: string) => (
        <div className="max-w-xs truncate" title={value}>
          {value || 'No content'}
        </div>
      ),
    },
  ];

  const formFields = [
    { key: 'author', label: 'Author Name', type: 'text' as const, required: true },
    { key: 'position', label: 'Position', type: 'text' as const, required: true },
    { key: 'company', label: 'Company', type: 'text' as const, required: true },
    { key: 'content', label: 'Testimonial Content', type: 'textarea' as const, required: true },
    { key: 'stars', label: 'Rating (1-5)', type: 'number' as const, required: true },
    { key: 'image', label: 'Author Photo', type: 'file' as const, required: true },
  ];

  return (
    <AdminLayout>
      <CRUDTable
        endpoint="/info/testimonials/"
        title="Testimonials"
        columns={columns}
        formFields={formFields}
      />
    </AdminLayout>
  );
};

export default TestimonialsAdmin;

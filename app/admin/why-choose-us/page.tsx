"use client";
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import CRUDTable from '@/components/CRUDTable';

const WhyChooseUsAdmin: React.FC = () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    {
      key: 'content',
      label: 'Content',
      render: (value: string) => (
        <div className="max-w-xs truncate" title={value}>
          {value || 'No content'}
        </div>
      ),
    },
  ];

  const formFields = [
    { key: 'title', label: 'Title', type: 'text' as const, required: true },
    { key: 'content', label: 'Content', type: 'textarea' as const, required: true },
  ];

  return (
    <AdminLayout>
      <CRUDTable
        endpoint="/info/whychooseus/"
        title="Why Choose Us"
        columns={columns}
        formFields={formFields}
      />
    </AdminLayout>
  );
};

export default WhyChooseUsAdmin;

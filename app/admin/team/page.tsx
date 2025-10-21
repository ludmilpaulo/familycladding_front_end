"use client";
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import CRUDTable from '@/components/CRUDTable';

const TeamAdmin: React.FC = () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'title', label: 'Position' },
    {
      key: 'image',
      label: 'Photo',
      render: (value: string) => (
        value ? (
          <img src={`https://lopes.pythonanywhere.com${value}`} alt="Team Member" className="w-16 h-16 object-cover rounded-full" />
        ) : (
          <span className="text-gray-400">No photo</span>
        )
      ),
    },
    {
      key: 'bio',
      label: 'Bio',
      render: (value: string) => (
        <div className="max-w-xs truncate" title={value}>
          {value || 'No bio'}
        </div>
      ),
    },
  ];

  const formFields = [
    { key: 'name', label: 'Full Name', type: 'text' as const, required: true },
    { key: 'title', label: 'Position/Title', type: 'text' as const, required: true },
    { key: 'bio', label: 'Bio', type: 'textarea' as const, required: true },
    { key: 'image', label: 'Profile Photo', type: 'file' as const, required: true },
    { key: 'github', label: 'GitHub URL', type: 'url' as const },
    { key: 'linkedin', label: 'LinkedIn URL', type: 'url' as const },
    { key: 'facebook', label: 'Facebook URL', type: 'url' as const },
    { key: 'twitter', label: 'Twitter URL', type: 'url' as const },
    { key: 'instagram', label: 'Instagram URL', type: 'url' as const },
  ];

  return (
    <AdminLayout>
      <CRUDTable
        endpoint="/info/teams/"
        title="Team Members"
        columns={columns}
        formFields={formFields}
      />
    </AdminLayout>
  );
};

export default TeamAdmin;

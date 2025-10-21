"use client";
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import CRUDTable from '@/components/CRUDTable';

const ProjectsAdmin: React.FC = () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Project Name' },
    { key: 'start_date', label: 'Start Date' },
    { key: 'end_date', label: 'End Date' },
    {
      key: 'description',
      label: 'Description',
      render: (value: string) => (
        <div className="max-w-xs truncate" title={value}>
          {value || 'No description'}
        </div>
      ),
    },
    {
      key: 'pictures',
      label: 'Images',
      render: (value: any[]) => (
        <div className="flex space-x-1">
          {value?.slice(0, 3).map((pic, index) => (
            <img
              key={index}
              src={`https://lopes.pythonanywhere.com${pic.image}`}
              alt={`Project ${index + 1}`}
              className="w-12 h-12 object-cover rounded"
            />
          ))}
          {value?.length > 3 && (
            <span className="text-xs text-gray-500">+{value.length - 3} more</span>
          )}
        </div>
      ),
    },
  ];

  const formFields = [
    { key: 'name', label: 'Project Name', type: 'text' as const, required: true },
    { key: 'description', label: 'Description', type: 'textarea' as const, required: true },
    { key: 'start_date', label: 'Start Date', type: 'date' as const, required: true },
    { key: 'end_date', label: 'End Date', type: 'date' as const, required: true },
  ];

  return (
    <AdminLayout>
      <CRUDTable
        endpoint="/project/projects/"
        title="Projects"
        columns={columns}
        formFields={formFields}
      />
    </AdminLayout>
  );
};

export default ProjectsAdmin;

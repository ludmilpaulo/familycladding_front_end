"use client";
import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import CRUDTable from '@/components/CRUDTable';

const CarouselAdmin: React.FC = () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    { key: 'sub_title', label: 'Subtitle' },
    {
      key: 'image',
      label: 'Images',
      render: (value: any[]) => (
        <div className="flex space-x-1">
          {value?.slice(0, 3).map((img, index) => (
            <img
              key={index}
              src={`https://lopes.pythonanywhere.com${img.image}`}
              alt={`Carousel ${index + 1}`}
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
    { key: 'title', label: 'Title', type: 'text' as const, required: true },
    { key: 'sub_title', label: 'Subtitle', type: 'text' as const, required: true },
  ];

  return (
    <AdminLayout>
      <CRUDTable
        endpoint="/info/carousels/"
        title="Carousel"
        columns={columns}
        formFields={formFields}
      />
    </AdminLayout>
  );
};

export default CarouselAdmin;

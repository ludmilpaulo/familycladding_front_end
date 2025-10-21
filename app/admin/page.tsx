"use client";
import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { adminAPI, adminEndpoints } from '@/lib/adminAPI';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    invoices: 0,
    about: 0,
    carousel: 0,
    services: 0,
    projects: 0,
    team: 0,
    testimonials: 0,
    whyChooseUs: 0,
    contacts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [
          invoices,
          about,
          carousel,
          services,
          projects,
          team,
          testimonials,
          whyChooseUs,
          contacts,
        ] = await Promise.all([
          adminAPI.getAll(adminEndpoints.invoices),
          adminAPI.getAll(adminEndpoints.about),
          adminAPI.getAll(adminEndpoints.carousel),
          adminAPI.getAll(adminEndpoints.services),
          adminAPI.getAll(adminEndpoints.projects),
          adminAPI.getAll(adminEndpoints.team),
          adminAPI.getAll(adminEndpoints.testimonials),
          adminAPI.getAll(adminEndpoints.whyChooseUs),
          adminAPI.getAll(adminEndpoints.contacts),
        ]);

        setStats({
          invoices: invoices.length,
          about: about.length,
          carousel: carousel.length,
          services: services.length,
          projects: projects.length,
          team: team.length,
          testimonials: testimonials.length,
          whyChooseUs: whyChooseUs.length,
          contacts: contacts.length,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { name: 'Invoices', count: stats.invoices, icon: '🧾', color: 'bg-purple-500' },
    { name: 'About Us', count: stats.about, icon: 'ℹ️', color: 'bg-blue-500' },
    { name: 'Carousel Items', count: stats.carousel, icon: '🎠', color: 'bg-indigo-500' },
    { name: 'Services', count: stats.services, icon: '🔧', color: 'bg-green-500' },
    { name: 'Projects', count: stats.projects, icon: '📁', color: 'bg-yellow-500' },
    { name: 'Team Members', count: stats.team, icon: '👥', color: 'bg-pink-500' },
    { name: 'Testimonials', count: stats.testimonials, icon: '💬', color: 'bg-red-500' },
    { name: 'Why Choose Us', count: stats.whyChooseUs, icon: '⭐', color: 'bg-orange-500' },
    { name: 'Contacts', count: stats.contacts, icon: '📞', color: 'bg-gray-500' },
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading dashboard...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Overview of your Family Cladding content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${stat.color} text-white`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="/admin/invoices"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🧾</div>
                <div className="font-medium">Manage Invoices</div>
              </div>
            </a>
            <a
              href="/admin/about"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">ℹ️</div>
                <div className="font-medium">Manage About Us</div>
              </div>
            </a>
            <a
              href="/admin/services"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🔧</div>
                <div className="font-medium">Manage Services</div>
              </div>
            </a>
            <a
              href="/admin/projects"
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">📁</div>
                <div className="font-medium">Manage Projects</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

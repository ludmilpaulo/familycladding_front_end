"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, [router]);

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: '📊' },
    { name: 'Invoices', href: '/admin/invoices', icon: '🧾' },
    { name: 'About Us', href: '/admin/about', icon: 'ℹ️' },
    { name: 'Carousel', href: '/admin/carousel', icon: '🎠' },
    { name: 'Services', href: '/admin/services', icon: '🔧' },
    { name: 'Projects', href: '/admin/projects', icon: '📁' },
    { name: 'Team', href: '/admin/team', icon: '👥' },
    { name: 'Testimonials', href: '/admin/testimonials', icon: '💬' },
    { name: 'Why Choose Us', href: '/admin/why-choose-us', icon: '⭐' },
    { name: 'Contacts', href: '/admin/contacts', icon: '📞' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl">
        <div className="flex h-16 items-center justify-center border-b border-gray-700 bg-gradient-to-r from-blue-600 to-blue-700">
          <h1 className="text-xl font-bold text-white">Family Cladding Admin</h1>
        </div>
        <nav className="mt-8 px-4">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/10 hover:shadow-lg transition-all duration-200 group"
                >
                  <span className="mr-3 text-lg group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
          <div className="text-xs text-gray-400 text-center">
            Family Cladding Admin Panel
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <div className="flex h-16 items-center justify-between bg-white shadow-lg px-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-gray-900">Admin Panel</h2>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
              <span>Welcome back!</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="btn-secondary px-4 py-2 text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span className="hidden sm:inline">View Site</span>
              <span className="sm:hidden">Site</span>
            </Link>
            <button
              onClick={handleLogout}
              className="btn-danger px-4 py-2 text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              Logout
            </button>
          </div>
        </div>
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

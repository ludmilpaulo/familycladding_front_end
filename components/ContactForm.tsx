"use client";
import { AboutUsData, fetchAboutUsData } from '@/useAPI/fetchData';
import React, { useEffect, useState } from 'react';
import { FiUser, FiMail, FiMessageCircle } from 'react-icons/fi';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: '',
  });

  const [aboutUsData, setAboutUsData] = useState<AboutUsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAboutUsData();
      setAboutUsData(data);
    };
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <div style={{ backgroundImage: `url(${aboutUsData?.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="container mx-auto py-8">
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Let’s chat and get a quote!</h2>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <div className="flex items-center">
              <FiUser className="text-gray-600 mr-2" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <div className="flex items-center">
              <FiMail className="text-gray-600 mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="company">
              Company Name
            </label>
            <div className="flex items-center">
              <FiUser className="text-gray-600 mr-2" />
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your company name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="country">
              Country
            </label>
            <div className="flex items-center">
              <FiUser className="text-gray-600 mr-2" />
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your country"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <div className="flex items-center">
              <FiMessageCircle className="text-gray-600 mr-2" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                placeholder="Enter your message"
                required
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

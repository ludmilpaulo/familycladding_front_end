"use client";
import { useState } from 'react';
import { postTestimonial, Testimonial } from '@/useAPI/fetchData';
import { FaStar } from 'react-icons/fa';

const AddTestimonialPage: React.FC = () => {
  const [author, setAuthor] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState('');
  const [stars, setStars] = useState(0);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('author', author);
    formData.append('position', position);
    formData.append('company', company);
    formData.append('content', content);
    formData.append('stars', stars.toString());
    if (image) {
      formData.append('image', image);
    }
  
    try {
      await postTestimonial(formData);
      console.log('Testimonial added successfully');
      // Redirect or show success message
    } catch (error) {
      console.error('Error adding testimonial:', error);
      // Handle error
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#c19242] to-yellow-500">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl text-center text-gray-800 mb-4">Add Testimonial</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="input"
          />
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />
            <input
              type="text"
              placeholder="Choose Image"
              value={image?.name || ''}
              readOnly
              className="input"
              onClick={() => (document.querySelector('input[type="file"]') as HTMLInputElement)?.click()}

            />
          </div>
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="input"
          />
          <div className="flex items-center space-x-2">
            <span className="text-blue-gray-700">Stars:</span>
            {[...Array(stars)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
          </div>
          <input
            type="range"
            min={0}
            max={5}
            value={stars}
            onChange={(e) => setStars(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <button onClick={handleSubmit} className="bg-green-500 w-full mt-4">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddTestimonialPage;

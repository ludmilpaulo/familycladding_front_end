import React from 'react';
import { baseAPI } from '@/useAPI/fetchData';

interface HeaderData {
  born_date: string;
  phone: string;
  address: string;
  whatsapp: string;
  facebook: string;
  twitter: string;
  instagram: string;
  logo: string;
  backgroundImage: string;
}

const GetQuoteSection: React.FC = () => {
  const [headerData, setHeaderData] = React.useState<HeaderData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    fetch(`${baseAPI}/info/aboutus/`)
      .then((response) => response.json())
      .then((data) => {
        setHeaderData(data[0]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="fixed w-full py-8 z-50" style={{ backgroundImage: `url(${headerData?.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-lg font-bold text-gray-800">
              Looking for a quality and affordable constructor for your next project?
            </h4>
          </div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 ease-in-out">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuoteSection;

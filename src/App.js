import React, { useState } from 'react';
import { Home, Package, Briefcase, Info, Mail } from 'lucide-react'; // Importing icons from lucide-react

// Main App component
const App = () => {
  const [activeTab, setActiveTab] = useState('home'); // State to manage the active tab

  // Data for tabs and their content
  const tabs = [
    { id: 'home', icon: Home, label: 'Home', content: (
      <div className="p-6 md:p-10 flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-800 mb-4 animate-fade-in-up">Welcome to Our Sales Display</h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
          Discover innovative solutions and exceptional services tailored to your needs. We are dedicated to providing the best for our clients.
        </p>
        <button className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
          Learn More
        </button>
      </div>
    )},
    { id: 'products', icon: Package, label: 'Products', content: (
      <div className="p-6 md:p-10 flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-teal-800 mb-4 animate-fade-in-up">Our Innovative Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl animate-fade-in-up animation-delay-200">
          {/* Product Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Product A</h3>
            <p className="text-gray-600 text-sm">High-performance solution for modern businesses. Designed for efficiency and scalability.</p>
          </div>
          {/* Product Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Product B</h3>
            <p className="text-gray-600 text-sm">User-friendly interface with advanced features. Boost your productivity today.</p>
          </div>
          {/* Product Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Product C</h3>
            <p className="text-gray-600 text-sm">Robust and reliable, built for demanding environments. Experience unparalleled performance.</p>
          </div>
        </div>
      </div>
    )},
    { id: 'services', icon: Briefcase, label: 'Services', content: (
      <div className="p-6 md:p-10 flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-purple-800 mb-4 animate-fade-in-up">Our Comprehensive Services</h2>
        <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-3 max-w-2xl animate-fade-in-up animation-delay-200">
          <li>Consulting & Strategy Development</li>
          <li>Custom Software Solutions</li>
          <li>Digital Marketing & SEO</li>
          <li>Technical Support & Maintenance</li>
          <li>Cloud Integration Services</li>
        </ul>
        <button className="mt-8 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
          Get a Quote
        </button>
      </div>
    )},
    { id: 'about', icon: Info, label: 'About Us', content: (
      <div className="p-6 md:p-10 flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-orange-800 mb-4 animate-fade-in-up">About Our Company</h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
          We are a leading company committed to innovation and customer satisfaction. With years of experience, we deliver cutting-edge solutions that drive success for our clients worldwide.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mt-4 animate-fade-in-up animation-delay-300">
          Our team of experts is passionate about technology and dedicated to achieving excellence in every project.
        </p>
      </div>
    )},
    { id: 'contact', icon: Mail, label: 'Contact Us', content: (
      <div className="p-6 md:p-10 flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-red-800 mb-4 animate-fade-in-up">Get in Touch</h2>
        <p className="text-base md:text-lg text-gray-700 mb-6 animate-fade-in-up animation-delay-200">
          Have questions or want to discuss a project? Reach out to us!
        </p>
        <div className="text-base md:text-lg text-gray-800 space-y-3 animate-fade-in-up animation-delay-300">
          <p><strong className="text-red-700">Email:</strong> info@example.com</p>
          <p><strong className="text-red-700">Phone:</strong> +1 (123) 456-7890</p>
          <p><strong className="text-red-700">Address:</strong> 123 Business Rd, Suite 100, City, Country</p>
        </div>
        <button className="mt-8 px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
          Send a Message
        </button>
      </div>
    )},
  ];

  return (
    // Main container for the entire application, ensuring full viewport height and no scrolling
    <div className="flex flex-col h-screen w-screen overflow-hidden font-inter bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Bar */}
      <nav className="flex-shrink-0 bg-white shadow-lg p-4 md:p-6 flex flex-wrap justify-center gap-2 md:gap-4 rounded-b-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            // Conditional styling for active tab
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ease-in-out
              ${activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-indigo-600'}
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50
              text-sm md:text-base font-medium
            `}
          >
            <tab.icon size={20} /> {/* Render the icon component */}
            <span className="hidden sm:inline">{tab.label}</span> {/* Label visible on larger screens */}
          </button>
        ))}
      </nav>

      {/* Content Area */}
      <main className="flex-grow p-4 flex items-center justify-center relative">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            // Conditional visibility and animation for content
            className={`
              absolute inset-0 flex items-center justify-center p-4 md:p-8
              bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl
              transform transition-all duration-700 ease-in-out
              ${activeTab === tab.id
                ? 'opacity-100 translate-y-0 z-10'
                : 'opacity-0 translate-y-full pointer-events-none -z-10'}
            `}
          >
            {tab.content}
          </div>
        ))}
      </main>

      {/* Tailwind CSS Custom Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
};

export default App;

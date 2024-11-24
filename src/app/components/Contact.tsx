// components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-gray-500 from-pink-100 to-gray-100 py-16 transform hover:scale-90 transition duration-300">
      <div className="container mx-auto px-6 text-center transform hover:scale-125 transition duration-700">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Name" className="w-full mb-4 p-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full mb-4 p-3 border rounded" />
          <textarea placeholder="Message" className="w-full mb-4 p-3 border rounded"></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

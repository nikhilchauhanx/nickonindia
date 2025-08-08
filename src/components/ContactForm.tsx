// src/components/ContactForm.tsx
'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Sending...');
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xpwloqdr', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('Thank you for your inquiry! I will get back to you shortly.');
        form.reset();
      } else {
        setStatus('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <select 
          name="service_interest" 
          defaultValue="" 
          required
          className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="" disabled>What service are you interested in?</option>
          <option>Next.js & React Development</option>
          <option>API & Backend Development</option>
          <option>Technical Content Creation</option>
          <option>Other Inquiry</option>
        </select>
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Tell me a little about your project..."
          required
          rows={5}
          className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="text-center">
        <button 
          type="submit"
          className="bg-white text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300"
        >
          Send Project Inquiry
        </button>
      </div>
      {status && <p className="text-center text-sm mt-4">{status}</p>}
    </form>
  );
};

export default ContactForm;

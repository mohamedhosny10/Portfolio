'use client';

import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{name?: string; email?: string; message?: string}>({});
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const remaining = 500 - formData.message.length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Enter a valid email';
    if (formData.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    alert('Thank you for your message!');
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Let&apos;s Work Together</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <button onClick={copyEmail} className="relative flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <Mail className="w-8 h-8 text-purple-600 mb-2" />
              <span className="text-sm text-slate-600">Email</span>
              <span className="text-sm font-semibold text-slate-900">{personalInfo.email}</span>
              {copied && <span className="absolute -bottom-2 translate-y-full text-xs bg-purple-600 text-white px-2 py-1 rounded">Copied!</span>}
            </button>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <Phone className="w-8 h-8 text-purple-600 mb-2" />
              <span className="text-sm text-slate-600">Phone</span>
              <div className="flex flex-col items-center gap-1">
                <a href={`tel:${personalInfo.whatsapp}`} className="text-sm font-semibold text-slate-900">
                  {personalInfo.whatsapp}
                </a>
                <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-slate-900">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            <a href={`https://wa.me/${personalInfo.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <Image src="/whatsapp-purple.svg" alt="WhatsApp" width={32} height={32} className="mb-2" />
              <span className="text-sm text-slate-600">WhatsApp</span>
              <span className="text-sm font-semibold text-slate-900">{personalInfo.whatsapp}</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-slate-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <div className="mt-1 flex justify-between text-xs text-slate-500">
                <span>{remaining} chars left</span>
                {errors.message && <span className="text-red-600">{errors.message}</span>}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-70"
              disabled={submitting}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}





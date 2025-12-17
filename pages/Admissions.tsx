import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { COURSES } from '../constants';

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    }, 1000);
  };

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-veda-900 mb-4">Admissions</h1>
            <p className="text-gray-600">Start your journey with Veda Degree College. Fill out the form below to inquire.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-3">
                {/* Info Sidebar */}
                <div className="bg-veda-800 text-white p-10 hidden md:flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold mb-6">Process</h3>
                        <ol className="space-y-6 relative border-l border-veda-600 ml-3">
                            <li className="pl-6 relative">
                                <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gold-500"></span>
                                <h4 className="font-bold">Inquire</h4>
                                <p className="text-sm text-veda-200 mt-1">Submit your details here.</p>
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-veda-500"></span>
                                <h4 className="font-bold">Counseling</h4>
                                <p className="text-sm text-veda-200 mt-1">Attend a session.</p>
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-veda-500"></span>
                                <h4 className="font-bold">Enroll</h4>
                                <p className="text-sm text-veda-200 mt-1">Submit docs & fees.</p>
                            </li>
                        </ol>
                    </div>
                    <div className="text-sm text-veda-300">
                        Need help? <br />
                        Call: +91 40 1234 5678
                    </div>
                </div>

                {/* Form */}
                <div className="col-span-2 p-10">
                    {status === 'success' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                            <p className="text-gray-600">We have received your inquiry. Our team will contact you shortly.</p>
                            <button onClick={() => setStatus('idle')} className="mt-6 text-veda-600 font-semibold hover:underline">
                                Send another inquiry
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-veda-500 focus:border-veda-500 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-veda-500 focus:border-veda-500 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-veda-500 focus:border-veda-500 outline-none transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Interested Course</label>
                                    <select
                                        required
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-veda-500 focus:border-veda-500 outline-none transition-all bg-white"
                                    >
                                        <option value="">Select a course</option>
                                        {COURSES.map(c => (
                                            <option key={c.id} value={c.title}>{c.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-veda-500 focus:border-veda-500 outline-none transition-all"
                                    placeholder="Tell us about your educational background or any specific questions."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-veda-900 text-white font-bold py-3 rounded-lg hover:bg-veda-800 transition-colors flex items-center justify-center"
                            >
                                <Send className="w-4 h-4 mr-2" /> Submit Inquiry
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;

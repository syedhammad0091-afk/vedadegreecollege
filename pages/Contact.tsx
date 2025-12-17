import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COLLEGE_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-veda-900 mb-4">Contact Us</h1>
            <p className="text-gray-600">We'd love to hear from you. Here's how you can reach us.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="w-12 h-12 bg-veda-100 rounded-lg flex items-center justify-center mb-4">
                        <MapPin className="w-6 h-6 text-veda-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {COLLEGE_INFO.address}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="w-12 h-12 bg-veda-100 rounded-lg flex items-center justify-center mb-4">
                        <Phone className="w-6 h-6 text-veda-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-sm text-gray-600">
                        {COLLEGE_INFO.phone}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Mon-Sat, 9am - 5pm</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="w-12 h-12 bg-veda-100 rounded-lg flex items-center justify-center mb-4">
                        <Mail className="w-6 h-6 text-veda-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-sm text-gray-600">
                        {COLLEGE_INFO.email}
                    </p>
                    <p className="text-sm text-gray-600">
                        info@vedacollege.edu.in
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="w-12 h-12 bg-veda-100 rounded-lg flex items-center justify-center mb-4">
                        <Clock className="w-6 h-6 text-veda-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
                    <p className="text-sm text-gray-600">
                        Monday - Saturday
                    </p>
                    <p className="text-sm text-gray-600">
                        9:00 AM - 5:00 PM
                    </p>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96 lg:h-auto relative">
                <img 
                    src="https://picsum.photos/800/600?grayscale" 
                    alt="Map Location" 
                    className="w-full h-full object-cover opacity-60" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg flex items-center">
                        <MapPin className="w-5 h-5 text-red-500 mr-2 animate-bounce" />
                        <span className="font-bold text-gray-900">Veda Degree College Campus</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

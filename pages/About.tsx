import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import { FACULTY } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500 min-h-screen bg-white">
      
      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-serif font-bold text-veda-900 mb-6">About Veda College</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 1995, Veda Degree College has been a beacon of knowledge, fostering academic excellence and holistic growth for over two decades.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                 <div className="absolute -inset-4 bg-gold-500/20 rounded-xl transform rotate-2"></div>
                 <img src="https://picsum.photos/600/400?random=20" alt="College Building" className="rounded-xl shadow-lg relative z-10 w-full" />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-veda-900 mb-4">Our Legacy</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    We believe in education that goes beyond the classroom. Our curriculum is designed to not only provide theoretical knowledge but also to instill ethical values and practical skills.
                </p>
                <div className="grid gap-4">
                    <div className="flex items-start">
                        <div className="bg-veda-100 p-2 rounded-lg mr-4 shrink-0">
                            <Target className="w-5 h-5 text-veda-700" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Mission</h3>
                            <p className="text-sm text-gray-600">To provide accessible, high-quality education that empowers students to become responsible global citizens.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-veda-100 p-2 rounded-lg mr-4 shrink-0">
                            <Eye className="w-5 h-5 text-veda-700" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Vision</h3>
                            <p className="text-sm text-gray-600">To be a premier institution recognized for excellence in teaching, research, and community engagement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Faculty Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-serif font-bold text-veda-900 mb-4">Our Distinguished Faculty</h2>
                <p className="text-gray-600">Meet the mentors guiding the next generation.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {FACULTY.map((f) => (
                    <div key={f.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-center group">
                        <div className="relative h-64 overflow-hidden">
                            <img src={f.imageUrl} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-veda-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                                <span className="text-white text-sm font-medium">View Profile</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg text-gray-900">{f.name}</h3>
                            <p className="text-gold-600 font-medium text-sm mb-2">{f.role}</p>
                            <p className="text-gray-500 text-sm">{f.qualification}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

    </div>
  );
};

export default About;

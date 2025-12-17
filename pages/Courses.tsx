import React from 'react';
import { Book, CheckCircle, Clock } from 'lucide-react';
import { COURSES } from '../constants';

const Courses: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-veda-900 mb-6">Academic Programs</h1>
            <p className="text-lg text-gray-600">
                Explore our wide range of undergraduate programs designed to nurture critical thinking and professional skills.
            </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {COURSES.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-2/5 bg-veda-100 p-8 flex flex-col items-center justify-center text-center">
                        <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                            <Book className="w-8 h-8 text-veda-600" />
                        </div>
                        <h3 className="text-xl font-bold text-veda-900 mb-1">{course.title}</h3>
                        <p className="text-sm font-medium text-veda-600">{course.degree}</p>
                        <div className="mt-4 inline-flex items-center text-xs font-semibold bg-white px-3 py-1 rounded-full text-gray-600">
                            <Clock className="w-3 h-3 mr-1" /> {course.duration}
                        </div>
                    </div>
                    <div className="p-8 md:w-3/5 flex flex-col justify-between">
                        <div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {course.description}
                            </p>
                            <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                            <ul className="space-y-2 mb-6">
                                {course.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="w-full py-2 bg-veda-50 text-veda-700 font-semibold rounded-lg hover:bg-veda-100 transition-colors border border-veda-200">
                            Download Syllabus
                        </button>
                    </div>
                </div>
            ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-veda-900 rounded-3xl p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl font-serif font-bold mb-4">Not sure which course is right for you?</h2>
            <p className="text-veda-200 mb-8 max-w-2xl mx-auto">
                Our academic counselors are here to help you make the right choice for your career.
                Use the AI assistant in the corner or contact us directly.
            </p>
            <a href="#/contact" className="inline-block bg-gold-500 text-veda-950 px-8 py-3 rounded-lg font-bold hover:bg-gold-600 transition-colors">
                Contact Counselors
            </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;

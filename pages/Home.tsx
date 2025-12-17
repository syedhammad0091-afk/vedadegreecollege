import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Trophy, Building2, Star } from 'lucide-react';
import { COURSES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <section className="relative bg-veda-900 min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://picsum.photos/1920/1080?grayscale&blur=2" 
                alt="College Campus" 
                className="w-full h-full object-cover opacity-20"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-veda-950 via-veda-900/80 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-gold-600/20 text-gold-500 border border-gold-600/30 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              Admissions Open 2024-2025
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Empowering Minds, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-yellow-200">Shaping Futures</span>
            </h1>
            <p className="text-lg md:text-xl text-veda-100 mb-8 leading-relaxed max-w-2xl">
              Join Veda Degree College to experience world-class education, state-of-the-art facilities, and a community dedicated to your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/admissions" className="px-8 py-4 bg-gold-500 text-veda-950 font-bold rounded-lg hover:bg-gold-600 transition-colors flex items-center justify-center">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/courses" className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-colors flex items-center justify-center border border-white/20">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-veda-50 -mt-10 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl shadow-xl p-8">
                {[
                    { icon: Users, label: 'Students', value: '2,500+' },
                    { icon: BookOpen, label: 'Courses', value: '15+' },
                    { icon: Trophy, label: 'Awards', value: '120+' },
                    { icon: Building2, label: 'Labs', value: '12' },
                ].map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center text-center p-4 border-r last:border-r-0 border-gray-100">
                        <stat.icon className="w-8 h-8 text-veda-600 mb-3" />
                        <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                        <span className="text-sm text-gray-500 uppercase tracking-wide mt-1">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Academic Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Diverse degrees designed to prepare you for the challenges of the modern world.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map((course) => (
              <div key={course.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="p-8">
                    <div className="w-12 h-12 bg-veda-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-veda-600 transition-colors">
                        <BookOpen className="w-6 h-6 text-veda-600 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-sm font-medium text-veda-600 mb-4">{course.degree} • {course.duration}</p>
                    <p className="text-gray-600 mb-6 line-clamp-3">{course.description}</p>
                    <Link to="/courses" className="inline-flex items-center text-veda-700 font-semibold hover:text-veda-900">
                        Learn details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses" className="inline-block px-8 py-3 bg-veda-100 text-veda-700 font-bold rounded-lg hover:bg-veda-200 transition-colors">
                View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-veda-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-veda-800 rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Choose Veda Degree College?</h2>
                    <div className="space-y-8">
                        <div className="flex">
                            <div className="shrink-0 mr-4">
                                <div className="w-10 h-10 rounded-full bg-veda-800 flex items-center justify-center text-gold-500 font-bold">1</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Experienced Faculty</h3>
                                <p className="text-veda-200">Learn from industry experts and PhD scholars dedicated to mentorship.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="shrink-0 mr-4">
                                <div className="w-10 h-10 rounded-full bg-veda-800 flex items-center justify-center text-gold-500 font-bold">2</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Modern Infrastructure</h3>
                                <p className="text-veda-200">Fully equipped labs, digital library, and smart classrooms.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="shrink-0 mr-4">
                                <div className="w-10 h-10 rounded-full bg-veda-800 flex items-center justify-center text-gold-500 font-bold">3</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Placement Support</h3>
                                <p className="text-veda-200">Dedicated career guidance cell ensuring top-tier placements.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img 
                        src="https://picsum.photos/600/400?random=10" 
                        alt="Students in library" 
                        className="rounded-lg shadow-2xl border-8 border-white/5"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-gold-500 p-6 rounded-lg shadow-xl hidden md:block">
                        <p className="text-veda-900 font-bold text-2xl">25+</p>
                        <p className="text-veda-900 text-sm font-medium">Years of Excellence</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Student Voices</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                        <img src={t.avatarUrl} alt={t.name} className="w-16 h-16 rounded-full object-cover shrink-0" />
                        <div>
                            <div className="flex text-gold-500 mb-2">
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                            </div>
                            <p className="text-gray-600 italic mb-4">"{t.content}"</p>
                            <div>
                                <h4 className="font-bold text-gray-900">{t.name}</h4>
                                <p className="text-sm text-veda-600">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

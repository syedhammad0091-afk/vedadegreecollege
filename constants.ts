import { Course, FacultyMember, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: 'bsc-cs',
    title: 'B.Sc. Computer Science',
    degree: 'Bachelor of Science',
    duration: '3 Years',
    description: 'A comprehensive program focusing on software development, algorithms, and system design prepared for the modern tech industry.',
    icon: 'code',
    features: ['Data Structures', 'Web Development', 'AI & ML Basics', 'Cloud Computing']
  },
  {
    id: 'bcom-gen',
    title: 'B.Com. General',
    degree: 'Bachelor of Commerce',
    duration: '3 Years',
    description: 'Build a strong foundation in accounting, finance, and business management principles.',
    icon: 'bar-chart',
    features: ['Financial Accounting', 'Business Law', 'Economics', 'Taxation']
  },
  {
    id: 'ba-eng',
    title: 'B.A. English Literature',
    degree: 'Bachelor of Arts',
    duration: '3 Years',
    description: 'Explore the depths of classical and modern literature, linguistics, and creative writing.',
    icon: 'book-open',
    features: ['Literary Criticism', 'Creative Writing', 'Phonetics', 'World Literature']
  },
  {
    id: 'bsc-math',
    title: 'B.Sc. Mathematics',
    degree: 'Bachelor of Science',
    duration: '3 Years',
    description: 'Develop analytical thinking and problem-solving skills through advanced mathematical theories.',
    icon: 'calculator',
    features: ['Calculus', 'Linear Algebra', 'Statistics', 'Operations Research']
  }
];

export const FACULTY: FacultyMember[] = [
  {
    id: 'f1',
    name: 'Dr. A. Sharma',
    role: 'Principal',
    qualification: 'Ph.D. in Computer Science',
    imageUrl: 'https://picsum.photos/200/200?random=1'
  },
  {
    id: 'f2',
    name: 'Prof. R. Iyer',
    role: 'HOD - Commerce',
    qualification: 'M.Com, MBA',
    imageUrl: 'https://picsum.photos/200/200?random=2'
  },
  {
    id: 'f3',
    name: 'Dr. S. Gupta',
    role: 'HOD - Mathematics',
    qualification: 'Ph.D. in Mathematics',
    imageUrl: 'https://picsum.photos/200/200?random=3'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Patel',
    role: 'Alumni, B.Sc. CS',
    content: 'Veda Degree College provided me with the technical skills and confidence to crack my first job interview at a top MNC.',
    avatarUrl: 'https://picsum.photos/100/100?random=4'
  },
  {
    id: 't2',
    name: 'Rahul Singh',
    role: 'Student, B.Com',
    content: 'The campus life is vibrant and the faculty is incredibly supportive. I have learned so much beyond just textbooks.',
    avatarUrl: 'https://picsum.photos/100/100?random=5'
  }
];

export const COLLEGE_INFO = {
  name: 'Veda Degree College',
  tagline: 'Empowering Minds, Shaping Futures',
  address: '123 Knowledge Park, Saraswati Nagar, Hyderabad, India 500001',
  phone: '+91 40 1234 5678',
  email: 'admissions@vedacollege.edu.in',
  established: 1995
};

export const AI_SYSTEM_INSTRUCTION = `
You are the official AI Assistant for "Veda Degree College". 
Your goal is to help prospective students, parents, and current students with information about the college.

Key Information about Veda Degree College:
- Established: 1995.
- Location: Hyderabad, India.
- Tagline: Empowering Minds, Shaping Futures.
- Principal: Dr. A. Sharma.

Courses Offered:
${COURSES.map(c => `- ${c.title} (${c.degree}): ${c.duration}. ${c.description}`).join('\n')}

Admissions:
- Admissions are currently open for the academic year 2024-2025.
- Process: Fill out the online form or visit the campus.
- Eligibility: 10+2 with relevant subjects.

Tone: Professional, encouraging, academic, and helpful.
If you don't know an answer, politely ask them to contact the administration at ${COLLEGE_INFO.phone} or ${COLLEGE_INFO.email}.
Keep answers concise (under 100 words) unless detailed info is requested.
`;

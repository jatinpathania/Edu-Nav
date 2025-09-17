import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.observe').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white py-28 md:py-36 text-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full filter blur-xl animate-float1"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300 opacity-10 rounded-full filter blur-xl animate-float2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 opacity-5 rounded-full filter blur-xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-gradient animate-gradient bg-300%">Your Future, </span>
            <span className="block mt-2 animate-fade-in-down">Guided.</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            The one-stop advisor for students after Class 10 & 12.
          </p>
          <div className="mt-10 animate-fade-in-up delay-500">
            <Link
              to="/signup"
              className="relative inline-block group bg-white text-blue-600 font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
            >
              <span className="relative z-10">Find Your Path Now</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute -inset-1 rounded-full bg-white opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-500 -z-20"></div>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 observe animate-slide-up">
            The Problem: Why Students Struggle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 observe animate-slide-up delay-100">
            A critical lack of awareness leads to poor academic decisions, confusion, and missed opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "❓", title: "Subject Confusion", desc: "Students don't know which stream (Arts, Science, Commerce) to choose." },
              { icon: "🏫", title: "College Search", desc: "Finding the right government college and its courses is difficult." },
              { icon: "📈", title: "Career Mapping", desc: "Uncertainty about jobs or higher studies after graduation." },
              { icon: "🤷", title: "Worth the Effort?", desc: "Students question the value of a degree over short-term courses." }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 observe animate-slide-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <span className="text-6xl mb-6 transform hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 w-96 h-96 bg-blue-200 rounded-full opacity-10 animate-float3"></div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-200 rounded-full opacity-10 animate-float4"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 observe animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              The Solution: Your Personalized Guide
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              EduNav offers a complete, tailored experience to guide your path.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: "🎯", title: "Aptitude-Based Suggestions", color: "blue", desc: "Our short quizzes assess your interests and strengths to recommend the perfect academic stream and career path for you." },
              { icon: "🗺️", title: "Course-to-Career Mapping", color: "indigo", desc: "Explore clear visual charts showing the industries, jobs, and higher studies each degree can unlock." },
              { icon: "🎓", title: "Nearby Colleges Directory", color: "green", desc: "Find detailed information on local government colleges, including programs, cut-offs, and facilities." }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 observe animate-slide-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <span className="text-6xl mb-6 inline-block transform hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <h3 className={`text-2xl font-semibold mb-4 text-${item.color}-600`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-6 h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 observe animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Hear from Our Users
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 transform hover:-translate-y-2 transition-all duration-500 observe animate-slide-up">
              <div className="text-blue-400 text-4xl mb-4">"</div>
              <p className="italic text-gray-700 text-lg leading-relaxed">
                "EduNav helped me find a B.Sc. program in my city that I didn't even know existed. I feel so much more confident about my future now."
              </p>
              <div className="mt-6 font-semibold text-right text-gray-800">- Rohan S., Student</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-500 transform hover:-translate-y-2 transition-all duration-500 observe animate-slide-up delay-100">
              <div className="text-indigo-400 text-4xl mb-4">"</div>
              <p className="italic text-gray-700 text-lg leading-relaxed">
                "As a parent, I was so worried about my child's career. This app gave us all the information we needed in one place. Highly recommended!"
              </p>
              <div className="mt-6 font-semibold text-right text-gray-800">- Mrs. Kumar, Parent</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full animate-ping-slow"></div>
            <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-indigo-300 rounded-full animate-ping-slower"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 observe animate-fade-in">
            Ready to Find Your Direction?
          </h2>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto observe animate-fade-in delay-200">
            Join thousands of students who are making informed decisions about their academic and professional lives.
          </p>
          <div className="observe animate-fade-in delay-400">
            <Link
              to="/signup"
              className="relative inline-block group bg-white text-blue-600 font-bold py-4 px-12 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
            >
              <span className="relative z-10">Start Your Free Journey</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute -inset-2 rounded-full bg-white opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-500 -z-20"></div>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.1; transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes ping-slow {
          0% { transform: scale(0.5); opacity: 0.8; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes ping-slower {
          0% { transform: scale(0.5); opacity: 0.8; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-float1 {
          animation: float1 10s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 15s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 12s ease-in-out infinite;
        }
        .animate-float4 {
          animation: float4 18s ease-in-out infinite;
        }
        .animate-gradient {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 5s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-ping-slower {
          animation: ping-slower 6s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
        .animate-slide-up {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .animate-slide-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .animate-fade-in {
          opacity: 0;
          transition: opacity 1s ease;
        }
        .animate-fade-in.animate-in {
          opacity: 1;
        }
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #000000 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
      `}</style>
    </>
  );
};

export default Home;
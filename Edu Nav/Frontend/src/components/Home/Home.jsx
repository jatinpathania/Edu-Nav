import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate-fade-in-down">
            Your Future, Guided.
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light max-w-2xl mx-auto animate-fade-in-up">
            The one-stop advisor for students after Class 10 & 12.
          </p>
          <Link
            to="/signup"
            className="mt-8 inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            Find Your Path Now
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            The Problem: Why Students Struggle
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            A critical lack of awareness leads to poor academic decisions, confusion, and missed opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
              <span className="text-5xl mb-4">❓</span>
              <h3 className="text-xl font-semibold mb-2">Subject Confusion</h3>
              <p className="text-gray-600 text-center">
                Students don't know which stream (Arts, Science, Commerce) to choose.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
              <span className="text-5xl mb-4">🏫</span>
              <h3 className="text-xl font-semibold mb-2">College Search</h3>
              <p className="text-gray-600 text-center">
                Finding the right government college and its courses is difficult.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
              <span className="text-5xl mb-4">📈</span>
              <h3 className="text-xl font-semibold mb-2">Career Mapping</h3>
              <p className="text-gray-600 text-center">
                Uncertainty about jobs or higher studies after graduation.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md">
              <span className="text-5xl mb-4">🤷</span>
              <h3 className="text-xl font-semibold mb-2">Worth the Effort?</h3>
              <p className="text-gray-600 text-center">
                Students question the value of a degree over short-term courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              The Solution: Your Personalized Guide
            </h2>
            <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
              EduNav offers a complete, tailored experience to guide your path.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <span className="text-5xl mb-4 inline-block">🎯</span>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">
                Aptitude-Based Suggestions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our short quizzes assess your interests and strengths to recommend the perfect academic stream and career path for you.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <span className="text-5xl mb-4 inline-block">🗺️</span>
              <h3 className="text-2xl font-semibold mb-2 text-indigo-600">
                Course-to-Career Mapping
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Explore clear visual charts showing the industries, jobs, and higher studies each degree can unlock.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <span className="text-5xl mb-4 inline-block">🎓</span>
              <h3 className="text-2xl font-semibold mb-2 text-green-600">
                Nearby Colleges Directory
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Find detailed information on local government colleges, including programs, cut-offs, and facilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Hear from Our Users
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <p className="italic text-gray-700">
                "EduNav helped me find a B.Sc. program in my city that I didn't even know existed. I feel so much more confident about my future now."
              </p>
              <div className="mt-4 font-semibold text-right text-gray-800">- Rohan S., Student</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
              <p className="italic text-gray-700">
                "As a parent, I was so worried about my child's career. This app gave us all the information we needed in one place. Highly recommended!"
              </p>
              <div className="mt-4 font-semibold text-right text-gray-800">- Mrs. Kumar, Parent</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Ready to Find Your Direction?
          </h2>
          <p className="text-lg md:text-xl font-light mb-8 max-w-3xl mx-auto">
            Join thousands of students who are making informed decisions about their academic and professional lives.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            Start Your Free Journey
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
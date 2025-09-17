import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Mock User Data - In a real application, this would come from an API or a state management system like Redux
  const [userName] = useState("Aisha Sharma");
  const [profileCompletion] = useState(75); // Percentage
  const [lastAptitudeScore] = useState("88%");

  const recommendedCourses = [
    { id: 1, name: "B.Sc. in Computer Science", match: 92, college: "IIT Delhi (Affiliated)" },
    { id: 2, name: "B.A. in Economics", match: 88, college: "University of Delhi" },
    { id: 3, name: "B.Com. (Hons) in Finance", match: 85, college: "St. Xavier's College" },
  ];

  const nearbyColleges = [
    { id: 1, name: "Govt. Arts & Science College", distance: "5 km", courses: ["BA", "B.Com"] },
    { id: 2, name: "Central Technical Institute", distance: "12 km", courses: ["B.Sc", "BCA"] },
    { id: 3, name: "Commerce & Business School", distance: "18 km", courses: ["B.Com", "BBA"] },
  ];

  const importantNotifications = [
    { id: 1, type: "info", text: "Admission opens for DU on June 1st. Don't miss out!" },
    { id: 2, type: "alert", text: "New scholarship opportunity for STEM students available." },
    { id: 3, type: "tip", text: "Pro-tip: Prepare for entrance exams with our free practice tests." },
  ];
  
  const upcomingDeadlines = [
    { id: 1, event: "DU Admission Form Submission", date: "June 30, 2025" },
    { id: 2, event: "JEE Mains Application Deadline", date: "July 15, 2025" },
    { id: 3, event: "State Scholarship Interview", date: "Aug 10, 2025" },
  ];

  const savedItems = [
    { id: 1, type: "course", name: "B.Sc. in Psychology" },
    { id: 2, type: "college", name: "Miranda House, Delhi" },
    { id: 3, type: "career", name: "Data Analyst" },
  ];

  return (
    <div>
    <Header/>
    <div className="bg-gray-100 min-h-screen p-6 sm:p-8 lg:p-12 font-sans text-gray-800">
      <div className="container mx-auto max-w-7xl">

        <header className="bg-white p-8 rounded-2xl shadow-xl mb-10 flex flex-col md:flex-row items-center justify-between animate-fade-in-down">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-700 mb-2">
              Hello, {userName}! 👋
            </h1>
            <p className="text-lg text-gray-600">
              Welcome back to your personalized career and education journey.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <span className="text-sm text-gray-500">Profile Progress:</span>
            <div className="w-32 bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${profileCompletion}%` }}
              ></div>
            </div>
            <span className="text-sm font-semibold text-green-600">{profileCompletion}%</span>
            <Link to="/profile" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Complete Profile
            </Link>
          </div>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/aptitude-test" className="bg-purple-500 text-white font-medium py-4 rounded-xl text-center shadow-lg hover:bg-purple-600 transition duration-300 transform hover:-translate-y-1">
                Take Aptitude Quiz
              </Link>
              <Link to="/colleges" className="bg-green-500 text-white font-medium py-4 rounded-xl text-center shadow-lg hover:bg-green-600 transition duration-300 transform hover:-translate-y-1">
                Explore Colleges
              </Link>
              <Link to="/career-mapper" className="bg-indigo-500 text-white font-medium py-4 rounded-xl text-center shadow-lg hover:bg-indigo-600 transition duration-300 transform hover:-translate-y-1">
                Map Your Career
              </Link>
            </div>
          </div>

        
          <div className="bg-white p-6 rounded-2xl shadow-lg flex-grow animate-fade-in-right">
            <h2 className="text-2xl font-bold text-red-700 mb-4 border-b-2 border-red-200 pb-3">
              Latest Notifications
            </h2>
            <ul className="space-y-4">
              {importantNotifications.map(notification => (
                <li key={notification.id} className="p-3 bg-red-50 rounded-lg text-gray-700 flex items-center shadow-sm">
                  <span className="text-red-500 text-2xl mr-3">
                    {notification.type === 'alert' ? '❗' : notification.type === 'info' ? 'ℹ️' : '💡'}
                  </span>
                  <p className="font-medium text-sm">{notification.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
   
          <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in-left">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
              Top Course Recommendations
            </h2>
            <div className="space-y-6">
              {recommendedCourses.map(course => (
                <div key={course.id} className="flex items-start bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="flex-shrink-0 mr-4 text-3xl">🎓</span>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-blue-800">{course.name}</h3>
                    <p className="text-gray-600 text-sm">{course.college}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      <span className="font-medium">Match: {course.match}%</span>
                      <div className="w-24 ml-3 bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-1.5 rounded-full"
                          style={{ width: `${course.match}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-full transition duration-300">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

    
          <div className="flex flex-col gap-8">

            <div className="bg-white p-6 rounded-2xl shadow-lg flex-grow animate-fade-in-right delay-100">
              <h2 className="text-2xl font-bold text-orange-700 mb-4 border-b-2 border-orange-200 pb-3">
                Upcoming Deadlines
              </h2>
              <ul className="space-y-4">
                {upcomingDeadlines.map(deadline => (
                  <li key={deadline.id} className="flex justify-between items-center p-3 bg-orange-50 rounded-lg shadow-sm text-gray-700">
                    <div>
                      <p className="font-medium">{deadline.event}</p>
                      <span className="text-xs text-gray-500">Due: {deadline.date}</span>
                    </div>
                    <span className="px-3 py-1 text-xs rounded-full font-semibold bg-orange-200 text-orange-800">
                      Upcoming
                    </span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition duration-300">
                View Calendar
              </button>
            </div>

    
            <div className="bg-white p-6 rounded-2xl shadow-lg flex-grow animate-fade-in-right delay-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-400 pb-3">
                Your Saved Items
              </h2>
              <ul className="space-y-4">
                {savedItems.map(item => (
                  <li key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm text-gray-700">
                    <span className="font-medium">{item.name}</span>
                    <span className="px-3 py-1 text-xs rounded-full font-semibold bg-blue-200 text-blue-800">
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </li>
                ))}
              </ul>
              <Link to="/saved" className="mt-6 w-full text-center block bg-gray-200 text-gray-800 font-medium py-2 rounded-lg transition duration-300 hover:bg-gray-300">
                View All Saved Items
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Dashboard;
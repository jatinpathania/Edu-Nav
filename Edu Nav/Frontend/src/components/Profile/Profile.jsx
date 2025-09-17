import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [student, setStudent] = useState({
    name: "Adesh Rana",
    email: "adesh@example.com",
    phone: "+91 9876543210",
    bio: "Aspiring software engineer | Passionate about AI & Web Dev",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      {/* Profile on the left */}
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="profile-photo"
          />
          <h2>{student.name}</h2>
          <p>{student.bio}</p>
        </div>

        <div className="profile-details">
          {isEditing ? (
            <div className="edit-form">
              <input
                type="text"
                name="name"
                value={student.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={student.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                value={student.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              <textarea
                name="bio"
                value={student.bio}
                onChange={handleChange}
                placeholder="Bio"
              />
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
            </div>
          ) : (
            <>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Phone:</strong> {student.phone}</p>
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>

      <div className="dashboard">
        <div className="card">
          <h3>Courses After +2</h3>
          <ul>
            <li>B.Sc Computer Science</li>
            <li>B.Tech Artificial Intelligence</li>
            <li>BBA (Business Administration)</li>
            <li>B.Com (Honours)</li>
          </ul>
        </div>

        <div className="card">
          <h3>Interests & Preferred Streams</h3>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Web Development</li>
            <li>Cybersecurity</li>
            <li>Engineering</li>
            <li>Commerce</li>
          </ul>
        </div>

        <div className="card">
          <h3>Top Colleges</h3>
          <ul>
            <li>IIT Delhi</li>
            <li>IIM Ahmedabad</li>
            <li>Delhi University</li>
          </ul>
        </div>

        <div className="card timeline-card">
          <h3>Timeline</h3>
          <ul className="timeline">
            <li>Class 10 Completed (2022)</li>
            <li>Class 12 Completed (2024)</li>
            <li>Preparing for College Admissions (2025)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
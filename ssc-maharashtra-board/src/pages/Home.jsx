import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Home = () => {
  const [activeTab, setActiveTab] = useState('about')

  const boardInfo = {
    about: {
      title: "About Maharashtra State Board",
      content: "The Maharashtra State Board of Secondary and Higher Secondary Education is a statutory and autonomous body established under the Maharashtra Secondary Boards Act. It conducts the SSC (Class 10) and HSC (Class 12) examinations in the state of Maharashtra.",
      image: "/src/assets/images/maharashtra-board.jpg"
    },
    exams: {
      title: "SSC Examination System",
      content: "The Secondary School Certificate (SSC) examination is conducted annually in March. The examination covers subjects from 5th to 10th standard as per the Maharashtra State Board curriculum. The board ensures fair and transparent evaluation processes.",
      image: "/src/assets/images/exam-system.jpg"
    },
    syllabus: {
      title: "Curriculum and Syllabus",
      content: "The Maharashtra State Board follows a comprehensive curriculum designed to provide holistic education. The syllabus is updated periodically to incorporate changes in educational trends and technological advancements.",
      image: "/src/assets/images/syllabus.jpg"
    }
  }

  const educationLeaders = [
    {
      name: "Shri Deepak Kesarkar",
      position: "Minister of School Education, Maharashtra",
      image: "/src/assets/images/education-minister.jpg",
      bio: "Responsible for overseeing the school education system in Maharashtra, including the SSC board."
    },
    {
      name: "Shri Varsha Gaikwad",
      position: "Former Education Minister, Maharashtra",
      image: "/src/assets/images/former-minister.jpg",
      bio: "Implemented several reforms in the Maharashtra education system during her tenure."
    },
    {
      name: "Shri Ramesh Pokhriyal Nishank",
      position: "Former Union Education Minister, India",
      image: "/src/assets/images/union-minister.jpg",
      bio: "Oversaw the implementation of National Education Policy 2020 at the national level."
    }
  ]

  return (
    <div className="home-page fade-in">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to SSC Maharashtra Online Exam Portal</h1>
          <p>Practice and prepare for your SSC examinations with our comprehensive online testing platform</p>
          <Link to="/standards" className="btn btn-secondary">
            Start Practicing Now
          </Link>
        </div>
      </section>

      <section className="board-info-section">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About Board
          </button>
          <button 
            className={`tab ${activeTab === 'exams' ? 'active' : ''}`}
            onClick={() => setActiveTab('exams')}
          >
            Examination System
          </button>
          <button 
            className={`tab ${activeTab === 'syllabus' ? 'active' : ''}`}
            onClick={() => setActiveTab('syllabus')}
          >
            Curriculum
          </button>
        </div>
        <div className="tab-content card">
          <h2>{boardInfo[activeTab].title}</h2>
          <div className="grid grid-2">
            <div>
              <p>{boardInfo[activeTab].content}</p>
              <button className="btn mt-3">Learn More</button>
            </div>
            <div className="image-container">
              <img src={boardInfo[activeTab].image} alt={boardInfo[activeTab].title} />
            </div>
          </div>
        </div>
      </section>

      <section className="leaders-section">
        <h2 className="text-center">Education Leaders</h2>
        <div className="grid grid-3 mt-4">
          {educationLeaders.map((leader, index) => (
            <div key={index} className="leader-card card">
              <div className="leader-image">
                <img src={leader.image} alt={leader.name} />
              </div>
              <div className="leader-details">
                <h3>{leader.name}</h3>
                <p className="position">{leader.position}</p>
                <p className="bio">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="exam-prep-section">
        <h2 className="text-center">Exam Preparation Resources</h2>
        <div className="grid grid-3 mt-4">
          <div className="resource-card card">
            <i className="fas fa-book-open fa-3x mb-2"></i>
            <h3>Previous Year Papers</h3>
            <p>Access question papers from previous SSC examinations for practice.</p>
            <button className="btn btn-secondary">View Papers</button>
          </div>
          <div className="resource-card card">
            <i className="fas fa-chalkboard-teacher fa-3x mb-2"></i>
            <h3>Study Materials</h3>
            <p>Download comprehensive study materials for all subjects.</p>
            <button className="btn btn-secondary">Download</button>
          </div>
          <div className="resource-card card">
            <i className="fas fa-graduation-cap fa-3x mb-2"></i>
            <h3>Online Tests</h3>
            <p>Take full-length mock tests to assess your preparation.</p>
            <Link to="/standards" className="btn btn-secondary">Start Test</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
import { Link } from 'react-router-dom'
import '../App.css'

const SubjectCard = ({ subject, standard }) => {
  return (
    <div className="subject-card card">
      <div className="subject-image">
        <img src={subject.image} alt={subject.name} />
      </div>
      <div className="subject-details">
        <h3>{subject.name}</h3>
        <p>{subject.description}</p>
        <Link 
          to={`/exam/${standard}`} 
          state={{ subject: subject.name }} 
          className="btn btn-secondary"
        >
          Start Exam
        </Link>
      </div>
    </div>
  )
}

export default SubjectCard
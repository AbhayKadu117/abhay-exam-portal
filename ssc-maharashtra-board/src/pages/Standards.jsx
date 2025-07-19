import { Link } from 'react-router-dom'
import '../App.css'

const Standards = () => {
  const standards = [
    {
      id: 5,
      name: "Standard 5",
      subjects: [
        { id: 1, name: "Mathematics", description: "Basic arithmetic, geometry and introduction to algebra", image: "/src/assets/images/subject-icons/math.jpg" },
        { id: 2, name: "English", description: "Grammar, comprehension and basic writing skills", image: "/src/assets/images/subject-icons/english.jpg" },
        { id: 3, name: "Marathi", description: "Marathi language and literature", image: "/src/assets/images/subject-icons/marathi.jpg" },
        { id: 4, name: "Science", description: "Introduction to physics, chemistry and biology", image: "/src/assets/images/subject-icons/science.jpg" },
        { id: 5, name: "Social Studies", description: "History, geography and civics", image: "/src/assets/images/subject-icons/social.jpg" }
      ],
      image: "/src/assets/images/std-5.jpg"
    },
    {
      id: 6,
      name: "Standard 6",
      subjects: [
        { id: 1, name: "Mathematics", description: "Advanced arithmetic, basic algebra and geometry", image: "/src/assets/images/subject-icons/math.jpg" },
        { id: 2, name: "English", description: "Advanced grammar, composition and literature", image: "/src/assets/images/subject-icons/english.jpg" },
        { id: 3, name: "Marathi", description: "Marathi language and literature", image: "/src/assets/images/subject-icons/marathi.jpg" },
        { id: 4, name: "Science", description: "Physics, chemistry and biology concepts", image: "/src/assets/images/subject-icons/science.jpg" },
        { id: 5, name: "Social Studies", description: "Indian history, world geography and civics", image: "/src/assets/images/subject-icons/social.jpg" }
      ],
      image: "/src/assets/images/std-6.jpg"
    },
    {
      id: 7,
      name: "Standard 7",
      subjects: [
        { id: 1, name: "Mathematics", description: "Algebra, geometry and introduction to statistics", image: "/src/assets/images/subject-icons/math.jpg" },
        { id: 2, name: "English", description: "Literature, advanced writing and comprehension", image: "/src/assets/images/subject-icons/english.jpg" },
        { id: 3, name: "Marathi", description: "Marathi language and literature", image: "/src/assets/images/subject-icons/marathi.jpg" },
        { id: 4, name: "Science", description: "Detailed study of physics, chemistry and biology", image: "/src/assets/images/subject-icons/science.jpg" },
        { id: 5, name: "Social Studies", description: "Indian history, geography and political science", image: "/src/assets/images/subject-icons/social.jpg" }
      ],
      image: "/src/assets/images/std-7.jpg"
    },
    {
      id: 8,
      name: "Standard 8",
      subjects: [
        { id: 1, name: "Mathematics", description: "Advanced algebra, geometry and statistics", image: "/src/assets/images/subject-icons/math.jpg" },
        { id: 2, name: "English", description: "Literature, essay writing and advanced grammar", image: "/src/assets/images/subject-icons/english.jpg" },
        { id: 3, name: "Marathi", description: "Marathi language and literature", image: "/src/assets/images/subject-icons/marathi.jpg" },
        { id: 4, name: "Science", description: "In-depth physics, chemistry and biology", image: "/src/assets/images/subject-icons/science.jpg" },
        { id: 5, name: "Social Studies", description: "World history, Indian geography and civics", image: "/src/assets/images/subject-icons/social.jpg" }
      ],
      image: "/src/assets/images/std-8.jpg"
    },
    {
      id: 9,
      name: "Standard 9",
      subjects: [
        { id: 1, name: "Mathematics", description: "Algebra, trigonometry and coordinate geometry", image: "/src/assets/images/subject-icons/math.jpg" },
        { id: 2, name: "English", description: "Literature, advanced writing and comprehension", image: "/src/assets/images/subject-icons/english.jpg" },
        { id: 3, name: "Marathi", description: "Marathi language and literature", image: "/src/assets/images/subject-icons/marathi.jpg" },
        { id: 4, name: "Science", description: "Physics, chemistry and biology with practicals", image: "/src/assets/images/subject-icons/science.jpg" },
        { id: 5, name: "Social Studies", description: "Modern Indian history, geography and economics", image: "/src/assets/images/subject-icons/social.jpg" }
      ],
      image: "/src/assets/images/std-9.jpg"
    },
    {
      id: 10,
      name: "Standard 10",
      subjects: [
        { id: 1, name: "Mathematics", description: "Advanced algebra, geometry and trigonometry", image: "/src/assets/images/subject-icons/math.jpg" },
        { id: 2, name: "English", description: "Literature, essay writing and advanced comprehension", image: "/src/assets/images/subject-icons/english.jpg" },
        { id: 3, name: "Marathi", description: "Marathi language and literature", image: "/src/assets/images/subject-icons/marathi.jpg" },
        { id: 4, name: "Science", description: "Detailed physics, chemistry and biology for SSC", image: "/src/assets/images/subject-icons/science.jpg" },
        { id: 5, name: "Social Studies", description: "Indian history, geography, civics and economics", image: "/src/assets/images/subject-icons/social.jpg" }
      ],
      image: "/src/assets/images/std-10.jpg"
    }
  ]

  return (
    <div className="standards-page fade-in">
      <h1 className="text-center">Select Your Standard</h1>
      <p className="text-center mb-5">Choose your standard to access subject-wise study materials and practice tests</p>
      
      <div className="grid grid-3">
        {standards.map(standard => (
          <div key={standard.id} className="standard-card card">
            <div className="standard-image">
              <img src={standard.image} alt={standard.name} />
              <div className="standard-overlay">
                <h3>{standard.name}</h3>
              </div>
            </div>
            <div className="standard-subjects">
              <h4>Subjects:</h4>
              <ul>
                {standard.subjects.map(subject => (
                  <li key={subject.id}>
                    <Link 
                      to={`/exam/${standard.id}`} 
                      state={{ subject: subject.name }}
                      className="subject-link"
                    >
                      <i className="fas fa-book-open"></i> {subject.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link 
                to={`/exam/${standard.id}`} 
                className="btn btn-secondary mt-3"
              >
                Start Full Test
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Standards
import StaffCard from '../components/StaffCard'
import '../App.css'

const About = () => {
  const staffMembers = [
    {
      id: 1,
      name: "Mr. Alakh Pandey",
      position: "Chairman",
      qualification: "Ph.D. in Education, M.Ed., B.Ed.",
      experience: 25,
      email: "chairman@mahahsscboard.in",
      phone: "+912025651240",
      image: "/src/assets/images/staff-1.jpg"
    },
    {
      id: 2,
      name: "Mr. Faizal Khan",
      position: "Vice Chairman",
      qualification: "M.Sc., B.Ed., M.Ed.",
      experience: 20,
      email: "vicechairman@mahahsscboard.in",
      phone: "+912025651241",
      image: "/src/assets/images/staff-2.jpg"
    },
    {
      id: 3,
      name: "Mr. Rajesh Patil",
      position: "Secretary",
      qualification: "M.A., B.Ed., M.Phil.",
      experience: 18,
      email: "secretary@mahahsscboard.in",
      phone: "+912025651242",
      image: "/src/assets/images/staff-3.jpg"
    },
    {
      id: 4,
      name: "Mrs. Anjali Deshmukh",
      position: "Academic Director",
      qualification: "Ph.D. in Mathematics, M.Sc., B.Ed.",
      experience: 22,
      email: "academic@mahahsscboard.in",
      phone: "+912025651243",
      image: "/src/assets/images/staff-4.jpg"
    },
    {
      id: 5,
      name: "Mr. Vijay Kumar",
      position: "Examination Controller",
      qualification: "M.A., B.Ed., Ph.D.",
      experience: 19,
      email: "exam@mahahsscboard.in",
      phone: "+912025651244",
      image: "/src/assets/images/staff-5.jpg"
    },
    {
      id: 6,
      name: "Mrs. Priya Sharma",
      position: "Curriculum Developer",
      qualification: "M.Sc., B.Ed., M.Ed.",
      experience: 15,
      email: "curriculum@mahahsscboard.in",
      phone: "+912025651245",
      image: "/src/assets/images/staff-6.jpg"
    },
    {
      id: 7,
      name: "Mr. Sanjay Joshi",
      position: "IT Director",
      qualification: "M.Tech (Computer Science), B.E.",
      experience: 12,
      email: "it@mahahsscboard.in",
      phone: "+912025651246",
      image: "/src/assets/images/staff-7.jpg"
    },
    {
      id: 8,
      name: "Mrs. Neeta Rao",
      position: "Public Relations Officer",
      qualification: "M.A. (Mass Communication), B.A.",
      experience: 10,
      email: "pro@mahahsscboard.in",
      phone: "+912025651247",
      image: "/src/assets/images/staff-8.jpg"
    }
  ]

  return (
    <div className="about-page slide-up">
      <section className="about-section">
        <h1>About Maharashtra State Board</h1>
        <div className="grid grid-2">
          <div>
            <h2>Our Mission</h2>
            <p>
              The Maharashtra State Board of Secondary and Higher Secondary Education is committed to providing quality education to students across Maharashtra. Our mission is to develop competent, confident and compassionate individuals who can contribute positively to society.
            </p>
            <p>
              We strive to maintain high academic standards while ensuring fair and transparent examination processes. Our curriculum is designed to foster critical thinking, creativity and practical skills among students.
            </p>
          </div>
          <div>
            <h2>Our Vision</h2>
            <p>
              To be a leading educational board that sets benchmarks in academic excellence, innovation and student development. We envision an education system that is accessible, equitable and prepares students for the challenges of the 21st century.
            </p>
            <p>
              Through continuous improvement and adoption of modern teaching methodologies, we aim to make Maharashtra's education system one of the best in the country.
            </p>
          </div>
        </div>
      </section>

      <section className="staff-section">
        <h2 className="text-center">Our Team</h2>
        <div className="grid grid-4 mt-4">
          {staffMembers.map(staff => (
            <StaffCard key={staff.id} staff={staff} />
          ))}
        </div>
      </section>

      <section className="achievements-section card mt-5">
        <h2 className="text-center">Board Achievements</h2>
        <div className="grid grid-3 mt-4">
          <div className="achievement-card">
            <i className="fas fa-graduation-cap fa-3x"></i>
            <h3>95%+ Pass Percentage</h3>
            <p>Consistently maintaining high pass percentages in SSC examinations</p>
          </div>
          <div className="achievement-card">
            <i className="fas fa-laptop-code fa-3x"></i>
            <h3>Digital Initiatives</h3>
            <p>Pioneered digital evaluation and online result systems</p>
          </div>
          <div className="achievement-card">
            <i className="fas fa-trophy fa-3x"></i>
            <h3>National Recognition</h3>
            <p>Recognized as one of the best state education boards in India</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
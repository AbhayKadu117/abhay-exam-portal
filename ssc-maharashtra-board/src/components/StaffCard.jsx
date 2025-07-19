import '../App.css'

const StaffCard = ({ staff }) => {
  return (
    <div className="staff-card card">
      <div className="staff-image">
        <img src={staff.image} alt={staff.name} />
      </div>
      <div className="staff-details">
        <h3>{staff.name}</h3>
        <p className="position">{staff.position}</p>
        <p className="qualification">{staff.qualification}</p>
        <p className="experience">{staff.experience} years of experience</p>
        <div className="staff-contact">
          <a href={`mailto:${staff.email}`}><i className="fas fa-envelope"></i></a>
          <a href={`tel:${staff.phone}`}><i className="fas fa-phone"></i></a>
        </div>
      </div>
    </div>
  )
}

export default StaffCard
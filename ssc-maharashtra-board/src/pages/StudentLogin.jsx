import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const StudentLogin = ({ setIsLoggedIn, setStudentData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enrollment: '',
    standard: ''
  })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.enrollment.trim()) {
      newErrors.enrollment = 'Enrollment number is required'
    }
    
    if (!formData.standard) {
      newErrors.standard = 'Standard is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsLoggedIn(true)
      setStudentData(formData)
      navigate('/standards')
    }
  }

  return (
    <div className="login-page fade-in">
      <div className="login-container card">
        <div className="login-header">
          <img src="/src/assets/images/logo.png" alt="SSC Maharashtra Board" height="60" />
          <h2>Student Login</h2>
          <p>Enter your details to access the online exam portal</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="enrollment">Enrollment/Seat Number</label>
            <input 
              type="text" 
              id="enrollment" 
              name="enrollment" 
              className={`form-control ${errors.enrollment ? 'is-invalid' : ''}`}
              value={formData.enrollment}
              onChange={handleChange}
            />
            {errors.enrollment && <div className="invalid-feedback">{errors.enrollment}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="standard">Standard</label>
            <select 
              id="standard" 
              name="standard" 
              className={`form-control ${errors.standard ? 'is-invalid' : ''}`}
              value={formData.standard}
              onChange={handleChange}
            >
              <option value="">Select your standard</option>
              <option value="5">Standard 5</option>
              <option value="6">Standard 6</option>
              <option value="7">Standard 7</option>
              <option value="8">Standard 8</option>
              <option value="9">Standard 9</option>
              <option value="10">Standard 10</option>
            </select>
            {errors.standard && <div className="invalid-feedback">{errors.standard}</div>}
          </div>
          
          <div className="form-group">
            <button type="submit" className="btn btn-block">Login</button>
          </div>
        </form>
        
        <div className="login-footer">
          <p>Don't have an enrollment number? Contact your school administration.</p>
          <p>For technical support, call <strong>1800-123-4567</strong></p>
        </div>
      </div>
    </div>
  )
}

export default StudentLogin
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useExam } from '../context/ExamContext'
import ExamTimer from '../components/ExamTimer'
import QuestionTracker from '../components/QuestionTracker'
import usePreventLeave from '../hooks/usePreventLeave'
import '../App.css'

const Exam = ({ studentData }) => {
  const { standard } = useParams()
  const navigate = useNavigate()
  const { examData, answers, attemptedQuestions, startExam, submitAnswer, endExam } = useExam()
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [warning, setWarning] = useState(false)

  // Mock exam data - in a real app, this would come from an API
  const mockExamData = {
    standard: parseInt(standard),
    subject: "Mathematics",
    questions: [
      {
        id: 1,
        text: "What is the value of π (pi) correct to two decimal places?",
        options: ["3.14", "3.16", "3.12", "3.18"],
        correctAnswer: "3.14"
      },
      {
        id: 2,
        text: "What is the sum of angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°"
      },
      {
        id: 3,
        text: "Solve for x: 2x + 5 = 15",
        options: ["5", "10", "7.5", "2.5"],
        correctAnswer: "5"
      },
      {
        id: 4,
        text: "What is the area of a square with side length 5 cm?",
        options: ["10 cm²", "20 cm²", "25 cm²", "30 cm²"],
        correctAnswer: "25 cm²"
      },
      {
        id: 5,
        text: "Which of these is a prime number?",
        options: ["9", "15", "21", "17"],
        correctAnswer: "17"
      }
    ],
    duration: 30 // minutes
  }

  // Initialize exam data if not already set
  useEffect(() => {
    if (!examData) {
      startExam(mockExamData)
    }
  }, [standard, examData, startExam])

  // Set up the prevent leave hook
  usePreventLeave(!isSubmitted)

  // Set selected option when changing questions
  useEffect(() => {
    setSelectedOption(answers[currentQuestion] || null)
  }, [currentQuestion, answers])

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    submitAnswer(currentQuestion, option)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < examData?.questions?.length) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitExam = () => {
    if (window.confirm('Are you sure you want to submit the exam? You cannot change answers after submission.')) {
      const result = endExam()
      setIsSubmitted(true)
      navigate('/result', { state: { result } })
    }
  }

  const handleTimeUp = () => {
    const result = endExam()
    setIsSubmitted(true)
    navigate('/result', { state: { result } })
  }

  if (!examData || !studentData) {
    return (
      <div className="exam-page">
        <div className="alert alert-warning">
          <p>Please login first to take the exam.</p>
          <button className="btn" onClick={() => navigate('/login')}>Go to Login</button>
        </div>
      </div>
    )
  }

  const currentQuestionData = examData.questions.find(q => q.id === currentQuestion)

  return (
    <div className="exam-page">
      <div className="exam-header">
        <h2>SSC Maharashtra Online Exam</h2>
        <div className="student-info">
          <span><strong>Name:</strong> {studentData.name}</span>
          <span><strong>Standard:</strong> {standard}</span>
          <span><strong>Enrollment:</strong> {studentData.enrollment}</span>
        </div>
      </div>
      
      <div className="exam-container grid grid-2">
        <div className="exam-content">
          <div className="exam-timer-container">
            <ExamTimer duration={examData.duration} onTimeUp={handleTimeUp} />
          </div>
          
          <div className="question-container card">
            <div className="question-number">
              Question {currentQuestion} of {examData.questions.length}
            </div>
            
            <div className="question-text">
              {currentQuestionData?.text}
            </div>
            
            <div className="options-container">
              {currentQuestionData?.options.map((option, index) => (
                <div 
                  key={index} 
                  className={`option ${selectedOption === option ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(option)}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                </div>
              ))}
            </div>
            
            <div className="navigation-buttons">
              <button 
                className="btn" 
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 1}
              >
                Previous
              </button>
              
              {currentQuestion < examData.questions.length ? (
                <button className="btn btn-secondary" onClick={handleNextQuestion}>
                  Next
                </button>
              ) : (
                <button className="btn btn-danger" onClick={handleSubmitExam}>
                  Submit Exam
                </button>
              )}
            </div>
          </div>
          
          <div className="exam-rules card mt-3">
            <h4>Exam Rules</h4>
            <ul>
              <li>You have {examData.duration} minutes to complete the exam.</li>
              <li>Do not refresh the page or navigate away during the exam.</li>
              <li>All questions are mandatory.</li>
              <li>There is no negative marking.</li>
              <li>Results will be displayed immediately after submission.</li>
            </ul>
          </div>
        </div>
        
        <div className="question-tracker-container">
          <QuestionTracker 
            totalQuestions={examData.questions.length} 
            attemptedQuestions={attemptedQuestions} 
            currentQuestion={currentQuestion}
          />
        </div>
      </div>
      
      {warning && (
        <div className="warning-modal">
          <div className="warning-content card">
            <h3>Warning!</h3>
            <p>If you try to change page you cannot continue exam and need to re-exam.</p>
            <button className="btn btn-danger" onClick={() => setWarning(false)}>Continue Exam</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Exam
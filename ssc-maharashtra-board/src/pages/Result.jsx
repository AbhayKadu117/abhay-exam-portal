import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'
import '../App.css'

const Result = ({ studentData }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [result, setResult] = useState(location.state?.result || null)
  const [chartData, setChartData] = useState([])

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

  useEffect(() => {
    if (!result && !studentData) {
      navigate('/')
    }

    if (result) {
      setChartData([
        { name: 'Correct', value: result.correct || 0 },
        { name: 'Wrong', value: result.wrong || 0 },
        { name: 'Not Attempted', value: result.notAttempted || 0 }
      ])
    }
  }, [result, studentData, navigate])

  if (!result || !studentData) {
    return (
      <div className="result-page">
        <div className="alert alert-warning">
          <p>No result data found. Please take an exam first.</p>
          <button className="btn" onClick={() => navigate('/standards')}>Take Exam</button>
        </div>
      </div>
    )
  }

  return (
    <div className="result-page fade-in">
      <div className="result-header">
        <h1>Exam Results</h1>
        <p>Here's your performance in the exam</p>
      </div>
      
      <div className="student-info card">
        <h3>Student Information</h3>
        <div className="grid grid-3">
          <div>
            <p><strong>Name:</strong> {studentData.name}</p>
            <p><strong>Standard:</strong> {studentData.standard}</p>
          </div>
          <div>
            <p><strong>Enrollment No:</strong> {studentData.enrollment}</p>
            <p><strong>Email:</strong> {studentData.email}</p>
          </div>
          <div>
            <p><strong>Exam Date:</strong> {new Date().toLocaleDateString()}</p>
            <p><strong>Exam Subject:</strong> Mathematics</p>
          </div>
        </div>
      </div>
      
      <div className="result-summary grid grid-2">
        <div className="score-card card">
          <h3>Score Summary</h3>
          <div className="score-details">
            <div className="score-item">
              <span className="score-label">Total Questions:</span>
              <span className="score-value">{result.totalQuestions || 0}</span>
            </div>
            <div className="score-item">
              <span className="score-label">Attempted:</span>
              <span className="score-value">{result.attempted || 0}</span>
            </div>
            <div className="score-item">
              <span className="score-label">Not Attempted:</span>
              <span className="score-value">{result.notAttempted || 0}</span>
            </div>
            <div className="score-item">
              <span className="score-label">Correct Answers:</span>
              <span className="score-value">{result.correct || 0}</span>
            </div>
            <div className="score-item">
              <span className="score-label">Wrong Answers:</span>
              <span className="score-value">{result.wrong || 0}</span>
            </div>
            <div className="score-item total-score">
              <span className="score-label">Total Score:</span>
              <span className="score-value">{result.score || 0}%</span>
            </div>
          </div>
        </div>
        
        <div className="chart-card card">
          <h3>Performance Chart</h3>
          <div className="chart-container">
            <PieChart width={400} height={300}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
      
      {result.examData?.questions && (
        <div className="answer-review card mt-4">
          <h3>Answer Review</h3>
          <div className="answers-grid">
            {result.examData.questions.map((question) => {
              const answer = result.answers?.[question.id]
              const isCorrect = question.correctAnswer === answer
              
              return (
                <div key={question.id} className={`answer-item ${isCorrect ? 'correct' : 'wrong'}`}>
                  <div className="question-number">Q{question.id}:</div>
                  <div className="question-text">{question.text}</div>
                  <div className="student-answer">
                    <strong>Your Answer:</strong> {answer || 'Not attempted'}
                  </div>
                  {!isCorrect && answer && (
                    <div className="correct-answer">
                      <strong>Correct Answer:</strong> {question.correctAnswer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
      
      <div className="result-actions mt-4">
        <button className="btn" onClick={() => window.print()}>
          <i className="fas fa-print"></i> Print Result
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/standards')}>
          <i className="fas fa-redo"></i> Take Another Test
        </button>
      </div>
    </div>
  )
}

export default Result
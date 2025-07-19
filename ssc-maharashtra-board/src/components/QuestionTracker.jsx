import '../App.css'

const QuestionTracker = ({ totalQuestions, attemptedQuestions, currentQuestion }) => {
  const renderQuestionIndicators = () => {
    return Array.from({ length: totalQuestions }).map((_, index) => {
      const isAttempted = attemptedQuestions.includes(index + 1)
      const isCurrent = currentQuestion === index + 1
      
      return (
        <div 
          key={index} 
          className={`question-indicator 
            ${isCurrent ? 'current' : ''} 
            ${isAttempted ? 'attempted' : 'not-attempted'}`}
          title={`Question ${index + 1}`}
        >
          {index + 1}
        </div>
      )
    })
  }

  return (
    <div className="question-tracker">
      <h4>Question Status</h4>
      <div className="status-summary">
        <div className="status-item">
          <span className="indicator attempted"></span>
          <span>Attempted: {attemptedQuestions.length}</span>
        </div>
        <div className="status-item">
          <span className="indicator not-attempted"></span>
          <span>Not Attempted: {totalQuestions - attemptedQuestions.length}</span>
        </div>
      </div>
      <div className="question-indicators">
        {renderQuestionIndicators()}
      </div>
    </div>
  )
}

export default QuestionTracker
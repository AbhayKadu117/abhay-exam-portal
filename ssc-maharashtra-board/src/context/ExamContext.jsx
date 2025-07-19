import { createContext, useState, useContext } from 'react'

const ExamContext = createContext()

export const ExamProvider = ({ children }) => {
  const [examData, setExamData] = useState(null)
  const [answers, setAnswers] = useState({})
  const [attemptedQuestions, setAttemptedQuestions] = useState([])

  const startExam = (data) => {
    setExamData(data)
    setAnswers({})
    setAttemptedQuestions([])
  }

  const submitAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
    
    if (!attemptedQuestions.includes(questionId)) {
      setAttemptedQuestions(prev => [...prev, questionId])
    }
  }

  const endExam = () => {
    // Calculate results
    const totalQuestions = examData.questions.length
    const attempted = attemptedQuestions.length
    const correct = Object.entries(answers).reduce((acc, [id, ans]) => {
      const question = examData.questions.find(q => q.id === parseInt(id))
      return acc + (question.correctAnswer === ans ? 1 : 0)
    }, 0)
    
    const result = {
      totalQuestions,
      attempted,
      notAttempted: totalQuestions - attempted,
      correct,
      wrong: attempted - correct,
      score: Math.round((correct / totalQuestions) * 100),
      answers
    }
    
    return result
  }

  return (
    <ExamContext.Provider value={{
      examData,
      answers,
      attemptedQuestions,
      startExam,
      submitAnswer,
      endExam
    }}>
      {children}
    </ExamContext.Provider>
  )
}

export const useExam = () => useContext(ExamContext)
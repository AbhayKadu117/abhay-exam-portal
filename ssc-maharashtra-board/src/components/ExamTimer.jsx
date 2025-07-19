import { useEffect, useState } from 'react'
import '../App.css'

const ExamTimer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60) // Convert minutes to seconds

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, onTimeUp])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className={`exam-timer ${timeLeft <= 300 ? 'warning' : ''}`}>
      <i className="fas fa-clock"></i> Time Remaining: {formatTime(timeLeft)}
    </div>
  )
}

export default ExamTimer
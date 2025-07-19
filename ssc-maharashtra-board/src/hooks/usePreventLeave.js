import { useEffect } from 'react'

const usePreventLeave = (isActive, message = 'If you try to change page you cannot continue exam and need to re-exam') => {
  useEffect(() => {
    if (!isActive) return

    const handleBeforeUnload = (e) => {
      e.preventDefault()
      e.returnValue = message
      return message
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [isActive, message])

  useEffect(() => {
    if (!isActive) return

    const handleClick = (e) => {
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        if (!window.confirm(message)) {
          e.preventDefault()
          e.stopPropagation()
        }
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [isActive, message])
}

export default usePreventLeave
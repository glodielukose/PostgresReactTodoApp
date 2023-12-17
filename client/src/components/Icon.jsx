import { useState } from 'react'
import { FaCircleCheck, FaRegCircleCheck } from 'react-icons/fa6'

const Icon = () => {
  const [isCompleted, setIsCompleted] = useState(false)

  return (
    <div onClick={() => setIsCompleted(!isCompleted)}>
      { isCompleted ? <FaCircleCheck /> : <FaRegCircleCheck />}
    </div>
  )
}

export default Icon

import PropTypes from 'prop-types';
import { useState } from "react"
import Icon from "./Icon"
import ProgressBar from "./ProgressBar"
import Modal from "./Modal"
import axios from "axios"

const ListItem = ({ task, fetchData }) => {
  const [isOpen, setIsOpen] = useState(false)

  const apiUrl = import.meta.env.VITE_API_URL

  const handleClick = () => {
    deleteTodo()
    fetchData()
  }

  const deleteTodo = async() => {
    try {
      await axios.delete(`${apiUrl}/${task.id}`)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <li className='flex justify-between items-center border-b pb-5'>
      <div className="flex items-center gap-2">
        <Icon completed={task.completed}/>
        <p>{task.title}</p>
      </div>
      
      <div className='flex gap-10 items-center'>
        <ProgressBar progress={task.progress} className/>
        <div className="flex gap-3 items-center">
          <button onClick={() => setIsOpen(true)} className="btn-success">Edit</button>
          <button className="btn-danger" onClick={handleClick}>Delete</button>
        </div>
      </div>

      { isOpen && <Modal setIsOpen={setIsOpen} mode={'edit'} task={task} fetchData={fetchData}/>}
    </li>
  )
}

ListItem.propTypes = {
  task: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default ListItem;

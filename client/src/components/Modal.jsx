import axios from "axios"
import { useState } from "react"
import { FaX } from "react-icons/fa6"
import Cookies from "js-cookie"
import PropTypes from 'prop-types';


const Modal = ({setIsOpen, mode,task}) => {
  const email = Cookies.get('email')

  const [data, setData] = useState({
    email: email,
    title: mode === 'edit' ? task.title : '',
    progress: mode === 'edit' ? task.progress : 0,
  })

  const apiUrl = import.meta.env.VITE_API_URL


  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();


  
    try {
      if (mode === 'edit') {
        await axios.put(`${apiUrl}/${task?.id}`, data);
      } else {
        await axios.post(`${apiUrl}/`, data);
      }
  
      window.location.reload()

    } catch (error) {
      console.log(error.message);
    }
  };
  

  return (
    <div className="bg-black/40 w-full h-full absolute top-0 left-0 flex justify-center items-center ">
      <div className="bg-white w-[600px] p-10 rounded-lg flex flex-col gap-10">
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Let&apos;s {mode} your task</h2>

          <FaX onClick={() => setIsOpen(false)} className="cursor-pointer" />
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="title" 
            required
            id="title"
            value={data.title}
            onChange={handleChange}
            placeholder="Your task goes here"
            className="border p-2 rounded-lg"
          />

          <label 
            htmlFor="progress" 
            className="font-medium"
          >
            Drag to select your current progress
          </label>

          <input 
            type="range" 
            name="progress" 
            id="progress" 
            value={data.progress}
            onChange={handleChange}
            
          />

          <button 
            type="submit" 
            className="p-2 bg-gray-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Modal

Modal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  task: PropTypes.object.isRequired,
};

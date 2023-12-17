import { useEffect, useState } from "react"
import ListHeader from "./ListHeader"
import ListItem from "./ListItem"
import Modal from "./Modal"
import axios from 'axios'
import Cookies from "js-cookie"


const TodoApp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [tasks, setTasks] = useState([])
  const email = Cookies.get('email')

  const apiUrl = import.meta.env.VITE_API_URL

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const result = await axios.get(`${apiUrl}/${email}`)
      const data = await result.data
      setTasks(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleSignOut = () => {
    Cookies.remove('email')
    Cookies.remove('token')
  }


  return (
    <main className=''>
      <div className='bg-white w-[700px] rounded-lg p-5'>
        <div className='flex justify-between items-center border-b pb-5'>
          <h1 className='text-3xl font-semibold'>
            <ListHeader title={'🌴️ Holiday tick list'} />
          </h1>
          
          <div className='flex gap-3'>
            <button className='btn-success' onClick={() => setIsOpen(true)}>add new</button>
            <button className='btn-danger' onClick={handleSignOut}>sign out</button>
          </div>
        </div>

        <ul className='py-5 flex flex-col gap-4'>
          {tasks?.map((task) => {
            return(
              <ListItem key={task.id} task={task} fetchData={fetchData}/>
            )
          })}
        </ul>

        { isOpen && <Modal setIsOpen={setIsOpen} mode={'create'} fetchData={fetchData}/>}
      </div>
    </main>
  )
}

export default TodoApp

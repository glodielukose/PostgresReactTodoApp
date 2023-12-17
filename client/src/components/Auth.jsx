import { useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const apiUrl = import.meta.env.VITE_API_URL

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      if (isLogin) {
        const res = await axios.post(`${apiUrl}/login`, {email, password}) 
        const data = await res.data
        Cookies.set("email", data.email)
        Cookies.set("token", data.token)
      } else {
        const res = await axios.post(`${apiUrl}/signup`, {email, password}) 
        const data = await res.data
        Cookies.set("email", data.email)
        Cookies.set("token", data.token)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const headerTitle = isLogin ? "Please Log In" : "Please Sign Up"

  return (
    <div className="bg-white w-[500px] rounded-lg flex flex-col gap-10 overflow-hidden">
      <div className="px-10 pt-5">
        <h2 className="text-2xl text-center">{headerTitle}</h2>
      </div>

      <div className="px-10">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email"
            className="border p-2 rounded-lg"
          />

          <input 
            type="password" 
            name="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter Your PassWord"
            className="border p-2 rounded-lg"
          />

          {isLogin ? 
           null
          :
          (
            <input 
            type="password" 
            name="confirmPassword" 
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Your PassWord"
            className="border p-2 rounded-lg" 
          />
          )
          }

          <input 
            type="submit" 
            value="submit"
            className="border bg-gray-200 p-2 rounded-lg cursor-pointer hover:bg-gray-500 hover:text-white transition-all" 
          />
        </form>
      </div>

      <div className="flex border-t">
        <button 
          className="w-1/2 rounded-none p-3 border-none bg-blue-200 hover:bg-blue-500 hover:text-white transition-all"
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>

        <button 
          className="w-1/2 rounded-none p-3 border-none hover:bg-blue-500 hover:text-white transition-all"
          onClick={() => setIsLogin(false)}
        >
            SignUp
          </button>
      </div>
    </div>
  )
}

export default Auth

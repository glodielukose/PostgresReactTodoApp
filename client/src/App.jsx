
import { useEffect, useState } from "react";
import Auth from "./components/Auth";
import TodoApp from "./components/TodoApp";
import Cookies from "js-cookie"

export default function App() {
  const [authToken, setAuthToken] = useState(null)

  useEffect(() => {
    const token = Cookies.get('token')
    setAuthToken(token)
  }, [])

  return (
    <>
      { authToken ? 
        <TodoApp />
        :
        <Auth setAuthToken={setAuthToken}/>
      }
    </>
  )
}

import { useEffect, useState } from "react"
import useUsersCrud from "./hooks/useUsersCrud"
import UsersApi from "./component/UsersApi"
import Form from "./component/Form"
import'./App.css'

function App() {
  const [close, setclose] = useState(true)
 const [updateinfo, setupdateinfo] = useState()
 const {
  users,
  getAllApi,
  userregister,
  DeleteRegister,
  Update
} = useUsersCrud()

 useEffect(() => {
  getAllApi()
},[])
const handelregisternew  = () => {
  setclose(false)
}
  return (
    <div className="App">
    
      <header className="app_header">
      <h1 className="app_tittle">Users</h1>
      <button onClick={handelregisternew} className="app_btn">New User</button>
      </header>
      
      <Form userregister={userregister}
      updateinfo={updateinfo}
      Update={Update}
      setupdateinfo={setupdateinfo}
      setclose={setclose}
      close={close}
      />
     <section className="app_users">
      {
        users?.map(peolpe => (
          <UsersApi
           key={peolpe.id}
           people={peolpe}
           DeleteRegister={DeleteRegister}
           setupdateinfo={setupdateinfo}
           setclose={setclose}
           />
        ))
      }
      </section>
    </div>
  )
  }

export default App

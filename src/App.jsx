import { useEffect, useState } from "react"
import useUsersCrud from "./hooks/useUsersCrud"
import UsersApi from "./component/UsersApi"
import Form from "./component/Form"
import'./App.css'
import Loading from "./component/Loading"

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
const [Lodin, setLodin] = useState(false)
useEffect(() => {
  setTimeout(() => {
    setLodin(true);
  }, 1800);
}, []);
  return (
    <div className="App">

      {
        Lodin
        ? <article>
        <header className="header">
       <header className="app_header">
       <h1 className="app_tittle"><i className="material-icons">people</i> Users</h1>
       <button onClick={handelregisternew} className="app_btn"><i className="material-icons">add</i> New User</button>
       </header>
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
       </article>
        : <Loading/>    
     
      }
  
     
    </div>
  )
  }

export default App

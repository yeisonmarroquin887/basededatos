import axios from "axios"
import { useState, useEffect } from "react"



const useUsersCrud = () => {
  const [users, setusers] = useState() 
  const url = `https://users-crud-test-wdrm.onrender.com/api/v1/user/`
  const getAllApi = () => {
    axios.get(url)
    .then(res => setusers(res.data))
    .catch(err => console.log(err))
  }
  useEffect(()=>{
    getAllApi()
  },[])

  
  const userregister = (data) => {
      axios.post(url, data)
      .then(() => getAllApi())
      .catch(err => console.log(err))
    }

   
    const DeleteRegister = id => {
      const deleteRegister = `${url}${id}/`
      axios.delete(deleteRegister)
      .then(() => getAllApi())
      .catch(err => console.log(err))
    }
    // aca utilizaremos el update para modificar la información del usuario
    const Update = (id, data) => {
     const urlUpdate = `${url}${id}/`
     axios.put(urlUpdate, data)
     .then(() => getAllApi())
     .catch(err => console.log(err))
    }
  

return {
  users,
  getAllApi,
  userregister,
  DeleteRegister,
  Update
}

}

export default useUsersCrud

import axios from "axios"
import { useState, useEffect } from "react"



const useUsersCrud = () => {
  const [users, setusers] = useState() 
  const url = `https://users-crud.academlo.tech/users/`
     //para consumir la Api
  const getAllApi = () => {
    axios.get(url)
    .then(res => setusers(res.data))
    .catch(err => console.log(err))
  }
  useEffect(()=>{
    getAllApi()
  },[])

  //para agregar registro en la Api
  const userregister = (data) => {
      axios.post(url, data)
      .then(() => getAllApi())
      .catch(err => console.log(err))
    }

    //para eliminar de la Api
    const DeleteRegister = id => {
      const deleteRegister = `${url}${id}/`
      axios.delete(deleteRegister)
      .then(() => getAllApi())
      .catch(err => console.log(err))
    }
    // aca utilizaremos el update para modificar la información del usuario
    const Update = (id, data) => {
     const urlUpdate = `${url}${id}/`
     axios.patch(urlUpdate, data)
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

import React from 'react'
import './Styles/UsersApi.css'
const UsersApi = ( {people, DeleteRegister, setupdateinfo, setclose} ) => {
  const handelupdate = () => {
    setupdateinfo(people)
    setclose(false)
  }
  return (
    <div className='users'>
      <h2 className='users_name'><b>{people.first_name} {people.last_name}</b></h2>
      <hr className='hr'/>
    <ul className='users_ul'>
      <li className='users_item'>
        <span className='users_label'>Email</span>
        <span className='users_value'>{people.email}</span>
        </li>
      <li className='users_item'>
        <span className='users_label'>Birthday</span>
        <span className='users_value'>{people.birthday}</span>
        </li>
    </ul>
    <hr className='hr'/>
    <footer className='users_footer'>
    <button className='users_button user_delete' onClick={() => DeleteRegister(people.id)}>
     el
    </button>
    <button className='users_button user_update' onClick={handelupdate}>ed</button>
    </footer>
    </div>
  )
}

export default UsersApi

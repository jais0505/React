import React from 'react'
const Registartion = () =>{
  return(
    <div>
      <h3>Registration form</h3>
      <div class='form-div'>
        <div name='name-div'>
          <div class='name-label'>
             <label htmlFor="">Name</label>
          </div>
          <div class='name-inp'>
             <input type="text" name="name" placeholder="Enter name"/>
          </div>
        </div>
        <div class='email-div'>
          <div class='email-label'>
            <label htmlFor="">Email</label>
          </div>
          <div class='email-inp'>
            <input type="email" name='email' placeholder="Enter email" />
          </div>
        </div>
        <div class='contact-div'>
          <div class='contact-label'>
            <label htmlFor="">Contact</label>
          </div>
          <div class='contact-inp'>
            <input type="number" name='contact' placeholder="Enter contact number" />
          </div>
        </div>
         <div class='pass-div'>
          <div class='pass-label'>
            <label htmlFor="">Password</label>
          </div>
          <div class='pass-inp'>
            <input type="password" name='pass' placeholder="Enter password" />
          </div>
        </div>
         <div class='add-div'>
          <div class='add-label'>
            <label htmlFor="">Address</label>
          </div>
          <div class='add-tarea'>
            <textarea name="add" id="" placeholder='Enter address'></textarea>
          </div>
        </div>
         <div class='pass-div'>
          <div class='pass-label'>
            <label htmlFor="">Password</label>
          </div>
          <div class='pass-inp'>
            <input type="number" name='password' placeholder="Enter contact number" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Registartion
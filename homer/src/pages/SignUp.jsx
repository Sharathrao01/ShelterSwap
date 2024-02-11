import { useState } from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {

  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = await fetch('api/auth/signup',
    {
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(formData)
    });
    const data = await res.json()
    console.log(data)
  }

  console.log(formData)


  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input className="border p-3 rounded-lg" id='username' type="text" placeholder="username" onChange={handleChange}/>
        <input className="border p-3 rounded-lg" id='email' type="text" placeholder="email"onChange={handleChange}/>
        <input className="border p-3 rounded-lg" id='password' type="text" placeholder="password"onChange={handleChange}/>
        <button className="bg-slate-700 text-white p-3 rounder-lg uppercase hover:opacity-85 disabled:opacity-80">Sign Up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Already having an account?</p>
        <Link to = {"/sign-in"}>
          <span className='text-blue-700 font-bold'>Sign In</span>
        </Link>

      </div>
    </div>
  )
}

export default SignUp
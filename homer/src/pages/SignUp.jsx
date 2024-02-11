import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input className="border p-3 rounded-lg" id='username' type="text" placeholder="username"/>
        <input className="border p-3 rounded-lg" id='email' type="text" placeholder="email"/>
        <input className="border p-3 rounded-lg" id='password' type="text" placeholder="password"/>
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
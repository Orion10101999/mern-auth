import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import OAuth from '../components/OAuth'
function SignUp() {
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState(false)
  const [formData , setFormData] = useState({})
  const navigate = useNavigate()
  const handleChange = (e) =>{
    setFormData({...formData ,[e.target.id] : e.target .value})
  }
  const submitHandler = async(e)=>{
    e.preventDefault()
    try {
      setLoading(true)
      const res = await fetch('/api/auth/signup',{
        method :'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(formData)
      })
      const data = await res.json()
      console.log(data);
      setLoading(false)
      if(data.success===false){
        setError(true)
        return;
      }
      navigate('/sign-in')
    } catch (error) {
      console.log(error);
      setError(true)
    }

  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>  
      <form onSubmit={submitHandler} className='flex flex-col gap-4'>
        <input 
          onChange={handleChange}
          type='text'
          placeholder='Username'
          id='username'
          className='bg-slate-100 p-3 rounded-lg'
          />
        <input 
          onChange={handleChange}
          type='email'
          placeholder='Email address'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          />
        <input
          onChange={handleChange}
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
        />
        <button disabled={loading} className='uppercase bg-slate-700 text-white p-3 rounded'>{loading ? 'Loading ...' : 'SignUp'}</button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account ? </p>
        <Link to={'/sign-in'}>
        <span className='text-blue-500'>SignIn</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something Went Wrong'}</p>
    </div>
  )
}

export default SignUp;
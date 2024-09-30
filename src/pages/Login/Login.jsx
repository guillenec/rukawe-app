import React from 'react'

const Login = () => {

  return (
    <div className='login mt-20 w-full min-h-72 border-2 rounded-md border-orange-600 flex justify-center items-center'>
      <h1>login</h1>
      <form action="">
        <section className='mail p-2 flex flex-col justify-start items-start'>
          <label htmlFor="email">Emmail</label>
          <input id='email' type='email' name='email' />
        </section>
      </form>
    </div>
  )
}

export default Login

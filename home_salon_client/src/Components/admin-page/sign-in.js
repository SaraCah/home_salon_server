import React, { Fragment, useState } from 'react';


const Login = () => {
  const [formData, setFormData] =  useState ({
    email: '',
    password: ''
  });

  const { email, password} = formData;

  const onChange = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    console.log('SUCCESS')
  };

  return (
    <Fragment>
      <h1>Login</h1>
      <p>
        Sign in to Account
      </p>
      <form onSubmit={e => onSubmit(e)}>
        <input
        type='email'
        placeholder='Email Address'
        name='email'
        value={email}
        onChange={e => onChange(e)}
        required
        />
        <input
        type='password'
        placeholder='Password'
        name='password'
        value={password}
        onChange={e => onChange(e)}
        />
        <input type='submit' value='Login'
        />
      </form>
    </Fragment>
  )



}


export default Login;
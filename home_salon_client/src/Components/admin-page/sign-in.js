import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'


const Login = (props) => {
  const [formData, setFormData] =  useState ({
    name: '',
    password: ''
  });

  const { name, password} = formData;

  const onChange = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    props.setAlert('SUCCESS')
  };

  return (
    <Fragment>
      <h1>Login</h1>
      <p>
        Sign in to Account
      </p>
      <form onSubmit={e => onSubmit(e)}>
        <input
        type='name'
        placeholder='name'
        name='name'
        value={name}
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


export default connect(null, { setAlert })(Login);
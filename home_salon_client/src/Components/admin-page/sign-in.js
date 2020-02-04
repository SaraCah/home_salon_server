import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login }) => {
  const [formData, setFormData] =  useState ({
    name: '',
    password: ''
  });

  const { name, password} = formData;

  const onChange = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    login(name, password)
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
}
export default connect(null, { login })(Login);
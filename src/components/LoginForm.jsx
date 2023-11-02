import React, { Component } from 'react';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { username: 'Ed', password: '2' },
        { username: 'Edd', password: '3' },
        { username: 'Eddie', password: '5' },
      ],
      currentUser: {
        username: '',
        password: '',
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      currentUser: {
        ...prevState.currentUser,
        [name]: value,
      },
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state.currentUser;
    const isValid = this.state.users.some(
      (user) => user.username === username && user.password === password
    );

    if (isValid) {
      this.props.setIsValid(true);
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  }

  render() {
    return (
      <div>
        <h2>Iniciar Sesión</h2>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <div>
            <label>Usuario:</label>
            <input
              type="text"
              name="username"
              value={this.state.currentUser.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label className='login-form'>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={this.state.currentUser.password}
              onChange={this.handleChange}
            />
          </div>
          <button className='login-form' type="submit">Iniciar Sesión</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

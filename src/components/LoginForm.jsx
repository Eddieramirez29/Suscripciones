// LoginForm.js
import React, { Component } from 'react';
 

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    // Comprueba las credenciales (usuario y contraseña)
    if (username === 'Eduardo' && password === '666') {
      // Credenciales válidas, llama a la función setIsValid para cambiar el estado en App
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
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label className='login-form'>Contraseña:</label>
            <input className='login-form'
              type="password"
              name="password"
              value={this.state.password}
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

import React, { useState } from 'react'
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';
import { auth } from '../../../firebase';
import notification from 'antd/lib/notification';

const propTypes = {
  history: PropTypes.object.isRequired,
};
const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const { history } = props
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(result => {
        const { user } = result;
        console.log(user, 'user')
        notification.success({
          message: 'Login Success'
        })
        localStorage.setItem('isLoggedIn', true)
        window.location = "/"
      })
      .catch(error => {
        notification.error({
          message: 'Login Failed'
        })
      })
      .finally(() => {
        setLoading(false);
      });
  }

  console.log(props)
  const handleChangeEmail = event => {
    setEmail(event.target.value)
  }
  const handleChangePassword = event => {
    setPassword(event.target.value)
  }
  return (
    <section className="login-form-section">
      <form 
        onSubmit={handleLogin}
      >
        <label className="_spacer-sm">
          Email:
        </label>
        <input className="_spacer-sm" type="email" onChange={handleChangeEmail} />
        <label className="_spacer-sm">
          Password:
        </label>
        <input className="_spacer-sm" type="password" onChange={handleChangePassword} />
        <input className="_spacer-sm login-button" type="submit" value={loading ? "Logging in..." : "Login"} />
      </form>
    </section>
  )
}

LoginForm.propTypes = propTypes;
export default withRouter(LoginForm)

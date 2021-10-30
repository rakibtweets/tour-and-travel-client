import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const { signWithGoogle, setUser, setError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || '/home';

  const handleSignWitGoogle = () => {
    signWithGoogle()
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        setError('');
        history.push(redirectUrl);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="text-center loging-container">
      <div className="login-section mx-auto">
        <div className=" d-flex flex-column justify-content-center align-items-center h-75">
          <h3 className="fw-bold ">Account Login</h3>
          <button
            onClick={handleSignWitGoogle}
            className=" btn my-3 mx-auto media-icon"
          >
            <FcGoogle className="fs-3 me-2" /> Sign In With Google
          </button>
          <p>
            Don't have an account? <Link to="/register">Create an Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css';

const Register = () => {
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
    <div className="text-center">
      <div className="login-section mx-auto">
        <div className=" d-flex flex-column justify-content-center align-items-center h-75">
          <h4 className="fw-bold ">Create Account With Google</h4>
          <button
            onClick={handleSignWitGoogle}
            className=" btn my-3 mx-auto media-icon"
          >
            <FcGoogle className="fs-3 me-2" /> Sign In With Google
          </button>
          <p>
            All ready have an account? <Link to="/login">Please Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

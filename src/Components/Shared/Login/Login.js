import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
  const { signWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || '/home';
  const handleSignWitGoogle = () => {
    signWithGoogle()
      .then((result) => {
        // setUser(result.user);
        // console.log(result.user);
        // setError('');
        history.push(redirectUrl);
      })
      .catch((error) => {
        // setError(error.message);
      });
  };
  return (
    <div className="text-center">
      <button
        onClick={handleSignWitGoogle}
        className=" btn btn-primary mt-5 mx-auto"
      >
        Google SignIn
      </button>
    </div>
  );
};

export default Login;

import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {
  const { signWithGoogle } = useFirebase();
  return (
    <div>
      <button onClick={signWithGoogle} className=" btn btn-primary mt-5">
        Google SignIn
      </button>
    </div>
  );
};

export default Login;

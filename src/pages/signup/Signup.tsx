import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// pages import
import './signup.scss';
import { useSignupMutation } from '../../slices/user.api.slice';
import { setCredentials } from '../../slices/auth.slice';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, setError } = useState(null);
  const signupForm = useRef(null);

  const [signup, { isLoading }] = useSignupMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo]);

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();

    const name = signupForm.current.name.value;
    const email = signupForm.current.email.value;
    const password = signupForm.current.password.value;
    // console.log('name: ', name, '\nemail: ', email, '\npassword: ', password);

    const userInfo = { name, email, password };

    try {
      const result = await signup(userInfo).unwrap();
      dispatch(setCredentials(result));
      navigate('/');
    } catch (err) {
      console.log(err);
      console.log(result.message);
      setError(result.error.message);
    }
  };

  return (
    <div className="signup">
      <h1>Sign in</h1>

      <form onSubmit={handleSubmitSignUp} ref={signupForm}>
        <label htmlFor="name">Name: </label>
        <br />
        <input type="text" name="name" id="name" placeholder="Name" />

        <label htmlFor="email">Email id:</label>
        <input type="email" name="email" id="email" placeholder="Email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Password" required />

        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
}

export default Signup;

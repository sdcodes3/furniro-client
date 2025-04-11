import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// pages import
import './signup.scss';
import { useSignupMutation } from '../../slices/user.api.slice';
import { setCredentials } from '../../slices/auth.slice';
import { useAppSelector } from '../../hooks';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [_, setError] = useState(null);
  const signupForm = useRef(null);

  const [signup] = useSignupMutation();
  const { userInfo } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo]);

  const handleSubmitSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name =
      signupForm.current &&
      ((signupForm.current as HTMLFormElement).elements.namedItem('name') as HTMLInputElement)
        .value;
    const email =
      signupForm.current &&
      ((signupForm.current as HTMLFormElement).elements.namedItem('email') as HTMLInputElement)
        .value;
    const password =
      signupForm.current &&
      ((signupForm.current as HTMLFormElement).elements.namedItem('password') as HTMLInputElement)
        .value;
    // console.log('name: ', name, '\nemail: ', email, '\npassword: ', password);

    const userInfo = { name, email, password };

    try {
      const result = await signup(userInfo).unwrap();
      dispatch(setCredentials(result));
      navigate('/');
    } catch (err: any) {
      console.log(err);
      console.log(err.result.message);
      setError(err.result.message);
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

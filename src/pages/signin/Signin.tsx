import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// pages import
import './signin.scss';
import { useSigninMutation } from '../../slices/user.api.slice';
import { setCredentials } from '../../slices/auth.slice';
import { useAppSelector } from '../../hooks';
const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const signinForm = useRef(null);

  const [signin] = useSigninMutation();
  const { userInfo } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo]);

  const handleSubmitSignin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email =
      signinForm.current &&
      ((signinForm.current as HTMLFormElement).elements.namedItem('email') as HTMLInputElement);
    const password =
      signinForm.current &&
      ((signinForm.current as HTMLFormElement).elements.namedItem('password') as HTMLInputElement);
    const userInfo = { email, password };

    try {
      const result = await signin(userInfo).unwrap();
      dispatch(setCredentials(result));
      navigate('/');
    } catch (err: any) {
      // console.log('error message: ', err);
      setError(err?.data?.message || err?.error);
    }
  };

  return (
    <div className="signin">
      <h1>Sign in</h1>

      <form onSubmit={handleSubmitSignin} ref={signinForm}>
        <label htmlFor="email">Email id:</label>
        <input type="email" name="email" id="email" placeholder="Email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Password" required />

        <input type="submit" value="Sign in" />
        {error ? error : null}
      </form>
    </div>
  );
};

export default Signin;

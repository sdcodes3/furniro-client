import { useRef, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserRound, Mail, KeyRound } from 'lucide-react';
import logo from '../../assets/logo.png';

// API + Redux
import './signup.scss';
import { useSignupMutation } from '../../slices/user.api.slice';
import { setCredentials } from '../../slices/auth.slice';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState<string | null>(null);
  const signupForm = useRef<HTMLFormElement | null>(null);

  const [signup, { isLoading }] = useSignupMutation();
  const { userInfo } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  const handleSubmitSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!signupForm.current) return;

    const name = signupForm.current.name.value;
    const email = signupForm.current.email.value;
    const password = signupForm.current.password.value;

    const userInfo = { name, email, password };

    try {
      const result = await signup(userInfo).unwrap();
      dispatch(setCredentials(result));
      navigate('/');
    } catch (err: any) {
      setError(err?.data?.message || err?.error || 'Signup failed');
    }
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: 'linear-gradient(to right, #fdf6ee, #fbeedb)',
        padding: '2rem',
      }}
    >
      <div
        className="bg-white p-5 shadow-lg rounded-4 w-100"
        style={{
          maxWidth: '420px',
          border: '1px solid #f3e5c1',
          backgroundColor: '#fffefb',
        }}
      >
        <div className="text-center mb-4">
          <div className="text-center mb-2">
            <img src={logo} alt="Logo" style={{ width: '60px', height: 'auto' }} />
          </div>
          <h2 className="fw-bold mb-1">Create an account</h2>
          <p className="text-muted">Start your journey with us</p>
        </div>

        <form onSubmit={handleSubmitSignUp} ref={signupForm}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-medium">
              Full Name
            </label>
            <div className="input-group border border-warning rounded">
              <span className="input-group-text bg-transparent border-0 text-warning">
                <UserRound size={18} />
              </span>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control border-0"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-medium">
              Email address
            </label>
            <div className="input-group border border-warning rounded">
              <span className="input-group-text bg-transparent border-0 text-warning">
                <Mail size={18} />
              </span>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control border-0"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-medium">
              Password
            </label>
            <div className="input-group border border-warning rounded">
              <span className="input-group-text bg-transparent border-0 text-warning">
                <KeyRound size={18} />
              </span>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control border-0"
                placeholder="Enter a secure password"
                required
              />
            </div>
          </div>

          {error && <div className="alert alert-danger py-2 text-center">{error}</div>}

          <button
            type="submit"
            className="btn w-100 fw-semibold"
            style={{
              backgroundColor: '#b5852d',
              color: '#fff',
              borderRadius: '10px',
            }}
            disabled={isLoading}
          >
            {isLoading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>

        <div className="text-center mt-4">
          <span className="text-muted">Already have an account? </span>
          <Link to="/signin" className="text-warning fw-semibold text-decoration-none">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

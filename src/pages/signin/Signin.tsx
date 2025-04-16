import { useRef, useEffect, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSigninMutation } from '../../slices/user.api.slice';
import { setCredentials } from '../../slices/auth.slice';
import { RootState, AppDispatch } from '../../store';
import { Mail, KeyRound } from 'lucide-react';
import logo from '../../assets/logo.png';

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [error, setError] = useState<string | null>(null);
  const signinForm = useRef<HTMLFormElement>(null);

  const [signin, { isLoading }] = useSigninMutation();
  const { userInfo } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  const handleSubmitSignin = async (event: FormEvent) => {
    event.preventDefault();
    if (!signinForm.current) return;

    const email = signinForm.current.email.value;
    const password = signinForm.current.password.value;

    try {
      const result = await signin({ email, password }).unwrap();
      dispatch(setCredentials(result));
      navigate('/');
    } catch (err: any) {
      setError(err?.data?.message || err?.error || 'Signin failed');
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

          <h2 className="fw-bold mb-1">Welcome back</h2>
          <p className="text-muted">Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmitSignin} ref={signinForm}>
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
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {/* <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label className="form-check-label" htmlFor="remember">
                Remember me
              </label>
            </div>
            <a href="#" className="text-warning text-decoration-none fw-semibold">
              Forgot your password?
            </a>
          </div> */}

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
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-muted">Don’t have an account? </span>
          <a href="/signup" className="text-warning fw-semibold text-decoration-none">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signin;

import { useEffect } from 'react';
import { useAuth } from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, [user]);

  const onClickSignOut = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await signOutUser();
    if (result.success) {
      navigate('/signin');
    } else {
      console.error(result.err);
    }
  };
  return (
    <div>
      Home page
      <button onClick={() => onClickSignOut}>sign out</button>
    </div>
  );
}

export default Home;

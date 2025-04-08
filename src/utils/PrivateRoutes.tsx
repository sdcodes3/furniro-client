import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, UseSelector } from 'react-redux';

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin', { replace: true });
    }
  }, [userInfo, navigate]);

  return userInfo ? <Outlet /> : navigate('/signin');
};

export default PrivateRoutes;

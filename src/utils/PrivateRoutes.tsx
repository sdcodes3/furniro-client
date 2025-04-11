import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';

const PrivateRoutes = () => {
  const { userInfo } = useAppSelector((state) => state.auth);

  return userInfo ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoutes;

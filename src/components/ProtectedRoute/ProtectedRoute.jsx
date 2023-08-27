import { Navigate, useLocation } from 'react-router-dom';
import { MAIN_PATH } from '../../utils/constants';

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  const { pathname } = useLocation();
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to={MAIN_PATH} state={{ backUrl: pathname }} replace />
  );
};

export default ProtectedRouteElement;

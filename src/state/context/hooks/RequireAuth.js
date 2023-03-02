import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  const decoded = auth?.accessToken ? jwt_decode(auth.accessToken) : undefined;
  const roles = decoded?.userInfo?.roles || [];
  //
  const dispatch = useDispatch();
  dispatch({
    type: "setUpUser/getUser",
    payload: decoded,
  });

  return roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.accessToken ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default RequireAuth;

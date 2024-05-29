import { Navigate, useLocation } from "react-router-dom";
import { useAdminChecker } from "../../Hooks/useAdminChecker";
import { useAuth } from "../../Hooks/useAuth";
export const AdminPrivateRoute = ({ children }) => {
  const location = useLocation();
  const [isAdmin, isLoading] = useAdminChecker();
  const { user, loading } = useAuth();
  if (isLoading || loading) {
    return "Loading.................";
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

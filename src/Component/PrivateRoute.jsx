import { useAuth } from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return "loading..................";
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

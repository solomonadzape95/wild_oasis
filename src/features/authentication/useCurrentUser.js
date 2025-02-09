import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export default function useCurrentUser() {
  const navigate = useNavigate();
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  //   const isAuthenticated = user.user.role === "authenticated";
  if (!user) navigate("/login", { replace: true });
  return {
    user,
    isLoading,
    isAuthenticated: user?.user?.role === "authenticated",
  };
}

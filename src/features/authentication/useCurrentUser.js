import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export default function useCurrentUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  //   const isAuthenticated = user.user.role === "authenticated";
  return {
    user,
    isLoading,
    isAuthenticated: user?.role === "authenticated",
  };
}

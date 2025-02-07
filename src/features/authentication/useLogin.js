/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      navigate("/dashboard", { replace: true });
      //   console.log(data);
      queryClient.setQueryData(["user"], data);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { login, isLoading };
}

import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        "User was created successfully, Please verify the user using te email"
      );
    },
    onError: (err) => toast.error(err.message),
  });
  return { signup, isLoading };
}

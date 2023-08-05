import { useMutation } from "@tanstack/react-query";
import { signin } from "./../../services/apiAuth";
import { toast } from "react-hot-toast";
export function useSignin() {
  const { isLoading: isSignLoading, matute: signinUser } = useMutation({
    mutationFn: ({ name, email, password, confirmPassword }) =>
      signin({ name, email, password, confirmPassword }),
    onSuccess: () => {
      toast.success("Account is successfully created!");
    },
    onError: (error) => {
      toast.error("sorry! something went wrong please try again later");
    },
  });

  return { signinUser, isSignLoading };
}

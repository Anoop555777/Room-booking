import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { signin } from "./../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useSignin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: signinUser, isLoading: isSignLoading } = useMutation({
    mutationFn: ({ name, email, password, confirmPassword }) =>
      signin({ name, email, password, confirmPassword }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], {
        name: data.user.name,
        email: data.user.email,
        id: data.user._id,
        isUser: data.user.isUser,
        photo: data.user.photo,
      });
      toast.success("Account is successfully created!");
      navigate("/");
    },
    onError: (error) => {
      toast.error("sorry! something went wrong please try again later");
    },
  });

  return { signinUser, isSignLoading };
}

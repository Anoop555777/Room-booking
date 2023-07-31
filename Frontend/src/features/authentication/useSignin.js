import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useSignin() {
  const queryClient = useQueryClient();
  const { isLoading: isSignLoading, matute: signinUser } = useMutation({
    mutationFn: signin,
    onSuccess: () => {},
  });
}

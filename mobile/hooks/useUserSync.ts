import { useApiClient, userApi } from "@/utils/api";
import { useAuth } from "@clerk/clerk-expo";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

export const useUserSync = () => {
  const { isSignedIn } = useAuth();
  const api = useApiClient();
  const syncUserMutation = useMutation({
    mutationFn: async() => await userApi.syncUser(api),
    onSuccess: (response: any) =>
      console.log("User synced successfully:", response.data.message),
    onError: (error: any) => console.error("Error syncing user:", error),
  });

  useEffect(() => {
    if (isSignedIn && !syncUserMutation.data) {
      syncUserMutation.mutate();
    }
  }, [isSignedIn]);

  return null;
};

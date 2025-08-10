import axios, { AxiosInstance } from "axios";
import { useAuth } from "@clerk/clerk-expo";

const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL || "https://ripplr-api.vercel.app/api";

export const createApiClient = (
  getToken: () => Promise<string | null>
): AxiosInstance => {
  const api = axios.create({ baseURL: API_BASE_URL });

  api.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return api;
};

export const useApiClient = (): AxiosInstance => {
  const { getToken } = useAuth();
  return createApiClient(getToken);
};

export const userApi = {
  syncUser: (api: AxiosInstance) => api.post("/users/sync"),
  getCurrentUser: (api: AxiosInstance) => api.get("/users/me"),
  updateProfile: (api: AxiosInstance, data: any) =>
    api.put("/users/profile", data),
};

export const postApi = {
  createPost: (api: AxiosInstance, data: { content: string; image?: string }) =>
    api.post("/post", data),
  getPosts: (api: AxiosInstance) => api.get("/posts"),
  getUserPosts: (api: AxiosInstance, username: string) =>
    api.get(`/posts/user/${username}`),
  likePost: (api: AxiosInstance, postId: string) =>
    api.post(`/posts/${postId}/like`),
  deletePost: (api: AxiosInstance, postId: string) =>
    api.delete(`/posts/${postId}`),
};

export const commentApi = {
  createComment: (api: AxiosInstance, postId: string, content: string) =>
    api.post(`/comments/post/${postId}`, { content }),
};

export const notificationApi = {
  getNotifications: (api: AxiosInstance) => api.get("/notifications"),
  deleteNotification: (api: AxiosInstance, notificationId: string) =>
    api.delete(`/notifications/${notificationId}`),
};

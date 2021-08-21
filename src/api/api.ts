import axios, { AxiosResponse } from "axios";
import { UserModel } from "./types";

const axiosInstance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com/",
  timeout: 15000,
});

export async function getUsers(): Promise<UserModel[]> {
  try {
    const response: AxiosResponse<UserModel[]> = await axiosInstance.get<
      UserModel[]
    >(`/users`);
    return response?.data;
  } catch (err) {
    return [];
  }
}

export async function getUser(id: string): Promise<UserModel | null> {
  try {
    const response: AxiosResponse<UserModel> =
      await axiosInstance.get<UserModel>(`/users/${id}`);
    return response?.data;
  } catch (err) {
    return null;
  }
}

import { useEffect, useReducer } from "react";
import { UserModel } from "@/api/types";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const USERS_ROUTE = "users";

export type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };

export type RequestAction<T> =
  | { type: "start" }
  | { type: "completed"; data: T }
  | { type: "failed"; error: Error };

export function reducer<T>(
  state: RequestState<T>,
  action: RequestAction<T>
): RequestState<T> {
  switch (action.type) {
    case "start":
      return {
        status: "loading",
      };
    case "completed":
      return {
        status: "success",
        data: action.data,
      };
    case "failed":
      return {
        status: "error",
        error: action.error,
      };
    default:
      return state;
  }
}

export function useFetch<T>(url: string): RequestState<T> {
  const [state, dispatch] = useReducer<
    React.Reducer<RequestState<T>, RequestAction<T>>
  >(reducer, { status: "idle" });

  useEffect(() => {
    let subscribed = true;
    if (url) {
      dispatch({ type: "start" });
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Request failed");
          }
          return response.json();
        })
        .then((data) => {
          if (subscribed) {
            dispatch({ type: "completed", data });
          }
        })
        .catch((error) => {
          if (subscribed) {
            dispatch({ type: "failed", error });
          }
        });
    }

    return () => {
      subscribed = false;
    };
  }, [url]);

  return state;
}

export function useFetchUsers(): RequestState<UserModel[]> {
  const url = `${BASE_URL}/${USERS_ROUTE}`;
  return useFetch(url);
}

export function useFetchUser(id: string): RequestState<UserModel> {
  const url = `${BASE_URL}/${USERS_ROUTE}/${id}`;
  return useFetch(url);
}

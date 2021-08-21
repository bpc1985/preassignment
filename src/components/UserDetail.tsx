import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { UserModel, UserParam } from "@/api/types";
import { useFetchUser, RequestState } from "@/hooks/useFetch";

import CircularProgress from "@material-ui/core/CircularProgress";
import UserItem from "@/components/UserItem";
import ErrorMessage from "@/components/ErrorMessage";

const UserDetail: FC = () => {
  const { id } = useParams<UserParam>();
  const res: RequestState<UserModel> = useFetchUser(id);
  return (
    <>
      {res.status === "loading" && <CircularProgress color="secondary" />}
      {res.status === "error" && <ErrorMessage message={res.error.message} />}
      {res.status === "success" && <UserItem {...res.data} />}
    </>
  );
};

export default UserDetail;

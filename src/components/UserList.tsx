import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

import { UserModel } from "@/api/types";
import { useFetchUsers, RequestState } from "@/hooks/useFetch";
import UserCard from "@/components/UserCard";
import ErrorMessage from "@/components/ErrorMessage";

const UserList: FC = () => {
  const skeletons = Array(10).fill("");
  const res: RequestState<UserModel[]> = useFetchUsers();
  return (
    <>
      {res.status === "loading" && (
        <Grid container spacing={2}>
          {skeletons.map((_, index) => (
            <Grid item xs={4} key={index}>
              <Skeleton
                key={index}
                variant="rect"
                animation="wave"
                width={310}
                height={254}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {res.status === "error" && <ErrorMessage message={res.error.message} />}
      {res.status === "success" && (
        <Grid container spacing={2}>
          {res.data.map((user: UserModel) => (
            <Grid item xs={4} key={user.id}>
              <UserCard {...user} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default UserList;

import React, { FC, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getUsers } from "@/api/api";
import { UserModel } from "@/api/types";
import UserCard from "@/components/UserCard";

const UserList: FC = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    const getAsyncUsers = async () => {
      const allUsers: UserModel[] = await getUsers();
      setUsers(allUsers);
    };
    getAsyncUsers();
  }, []);

  return (
    <Grid container spacing={2}>
      {users.map((user: UserModel) => (
        <Grid item xs={4} key={user.id}>
          <UserCard {...user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;

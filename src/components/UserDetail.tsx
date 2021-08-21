import React, { FC, useState, useEffect } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { getUser } from "@/api/api";
import { UserModel, UserParam } from "@/api/types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  list: {
    marginTop: 2,
  },
}));

const UserDetail: FC = () => {
  const classes = useStyles();

  const { id } = useParams<UserParam>();
  const [user, setUser] = useState<UserModel | null>(null);

  useEffect(() => {
    const getAsyncUser = async () => {
      const usr: UserModel | null = await getUser(id);
      setUser(usr);
    };
    getAsyncUser();
  }, []);

  return (
    <Card>
      {user ? (
        <CardContent>
          <Typography variant="h6" component="h6">
            - Name: {user?.name}
          </Typography>
          <Typography variant="h6" component="h6">
            - Username: {user?.username}
          </Typography>
          <Typography variant="h6" component="h6">
            - Email: {user?.email}
          </Typography>
          <Typography variant="h6" component="h6">
            - Phone: {user?.phone}
          </Typography>
          <Typography variant="h6" component="h6">
            - Company: {user?.company.name}
          </Typography>
          <Typography variant="h6" component="h6">
            - Website: {user?.website}
          </Typography>
          <Typography variant="h6" component="h6">
            - Address:
            <ul className={classes.list}>
              <li>Street: {user?.address.street}</li>
              <li>Suite: {user?.address.suite}</li>
              <li>City: {user?.address.city}</li>
              <li>Zipcode: {user?.address.zipcode}</li>
            </ul>
          </Typography>
        </CardContent>
      ) : (
        <CardContent>
          <Typography variant="h6" component="h6">
            User is not found !!!
          </Typography>
        </CardContent>
      )}
      <CardActions>
        <RouterLink to="/">Return</RouterLink>
      </CardActions>
    </Card>
  );
};

export default UserDetail;

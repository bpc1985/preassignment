import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { UserModel } from "@/api/types";

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

const UserItem: FC<UserModel> = (data: UserModel) => {
  const classes = useStyles();
  const { name, username, email, phone, company, website, address } = data;
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h6">
          - Name: {name}
        </Typography>
        <Typography variant="h6" component="h6">
          - Username: {username}
        </Typography>
        <Typography variant="h6" component="h6">
          - Email: {email}
        </Typography>
        <Typography variant="h6" component="h6">
          - Phone: {phone}
        </Typography>
        <Typography variant="h6" component="h6">
          - Company: {company.name}
        </Typography>
        <Typography variant="h6" component="h6">
          - Website: {website}
        </Typography>
        <Typography variant="h6" component="h6">
          - Address:
          <ul className={classes.list}>
            <li>Street: {address.street}</li>
            <li>Suite: {address.suite}</li>
            <li>City: {address.city}</li>
            <li>Zipcode: {address.zipcode}</li>
          </ul>
        </Typography>
      </CardContent>

      <CardActions>
        <RouterLink to="/">Return</RouterLink>
      </CardActions>
    </Card>
  );
};

export default UserItem;

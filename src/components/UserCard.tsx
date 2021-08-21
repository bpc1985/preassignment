import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    marginBottom: 20,
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  username: {
    fontStyle: "italic",
  },
  website: {
    color: "#009dc4",
    textDecoration: "underline",
  },
}));

interface IUserCard {
  id: number;
  name: string;
  username: string;
  website: string;
}

const UserCard: FC<IUserCard> = ({
  id,
  name,
  username,
  website,
}: IUserCard) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent className={classes.content}>
        <Avatar className={classes.avatar}>{name.charAt(0)}</Avatar>
        <Typography variant="h6" component="h6">
          {name}
        </Typography>
        <Typography
          variant="caption"
          display="block"
          className={classes.username}
        >
          @{username}
        </Typography>
        <Typography
          variant="caption"
          display="block"
          className={classes.website}
        >
          http://{website}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          component={RouterLink}
          to={`/user/${id}`}
        >
          More Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;

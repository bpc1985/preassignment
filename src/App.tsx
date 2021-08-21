import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import UserList from "@/components/UserList";
import UserDetail from "@/components/UserDetail";
import NoMatch from "@/components/NoMatch";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const App: FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" component="main" className={classes.heroContent}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/users" />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:id">
            <UserDetail />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;

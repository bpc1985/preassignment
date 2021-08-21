import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

interface IErrorMessage {
  message: string;
}

const ErrorMessage: FC<IErrorMessage> = ({ message }) => (
  <>
    <Typography color="secondary">An error has occurred: {message}</Typography>
    <RouterLink to="/">Return</RouterLink>
  </>
);

export default ErrorMessage;

import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";

interface IErrorMessage {
  message: string;
}

const ErrorMessage: FC<IErrorMessage> = ({ message }) => (
  <Typography color="secondary">An error has occurred: {message}</Typography>
);

export default ErrorMessage;

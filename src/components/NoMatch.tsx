import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const NoMatch: FC = () => {
  const location = useLocation();
  return (
    <div>
      No match for <code>{location.pathname}</code>
    </div>
  );
};

export default NoMatch;

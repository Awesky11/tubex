import React from "react";
import "./Common.css";

import Alert from "react-bootstrap/Alert";

export const AlertMessage = ({message, variant, source}) => {
  return (
    <Alert key={variant} variant={variant}>
      <span>
        <img src={source} className="icon" />
      </span>
      {message}
    </Alert>
  );
};

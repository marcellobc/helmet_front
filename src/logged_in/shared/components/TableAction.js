import { Typography } from "@material-ui/core";
import React from "react";

export default function TableAction({ condition, onClick, content }) {
  return condition ? (
    <Typography
      style={{
        cursor: "pointer",
        margin: "0 10px",
      }}
      align="center"
      color="primary"
      onClick={onClick}
      role="button"
    >
      {content}
    </Typography>
  ) : null;
}

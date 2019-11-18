import React from "react";

export default function Error({ error }) {
  if (error) {
    return (
      <div>
        <span style={{ color: "red" }}>{error.message}</span>
      </div>
    );
  } else {
    return null;
  }
}

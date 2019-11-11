import React from "react";

export default function Error({ error }) {
  console.log("ERROR COMPONENT", error);
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

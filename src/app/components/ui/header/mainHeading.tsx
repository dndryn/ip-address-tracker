import React from "react";
// style -> src\app\assets\scss\header.scss

const mainHeading = (props): JSX.Element => {
  return (
      <h1 id="main-heading" className="is-centered">{props.name}</h1>
  )
}

export default mainHeading;
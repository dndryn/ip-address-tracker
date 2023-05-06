import React from "react";
import Button from "./Button";
import "@style/input";

function Input(): JSX.Element {
  return (
    <form id="main-form" action="submit" className="is-flex">
      <label htmlFor="main-formt">IP Address</label>
      <input
        id="main-form_input"
        type="text"
        name="ip"
        placeholder="Search for any IP address or domain"
      />
      <Button />
    </form>
  );
}

export default Input;

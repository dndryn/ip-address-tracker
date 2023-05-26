import React, { useState } from "react";
import Button from "./Button";
import "@style/input";

//TODO: move to ui folder (components/ui/form)
function Input({ handler }): JSX.Element {
// const [ip, setIp] = useState<string>("");
// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   console.log(e.defaultPrevented);
//   console.log(ip);

//   const info = await getLocation(ip);
//   console.log(info.location.city);

// }

// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setIp(e.target.value);
// }

  return (
    <form 
      id="main-form" 
      action="submit" 
      className="is-flex"
      onSubmit={ handler } // <-- inserire qui la funzione che fa la chiamata API
    >
      <label htmlFor="main-formt">IP Address</label>
      <input
        id="main-form_input"
        type="text"
        name="ip"
        placeholder="Search for any IP address or domain"
        // onChange={handleChange}
      />
      <Button />
    </form>
  );
}

export default Input;

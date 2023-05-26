import React from 'react';
import Arrow from '@asset/icon-arrow.svg';

const Button = (props): JSX.Element => {
  return (
    <button
      id="main-form_button"
      type="submit"
      form={props.formID}
      style={{ backgroundImage: `url(${Arrow})` }}
    > 
    </button>
  ); 
}

export default Button;

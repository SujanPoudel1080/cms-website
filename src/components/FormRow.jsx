import React from "react";

const FormRow = ({
  type,
  placeHolder,
  labelText,
  name,
  className,
  required,
}) => {
  return (
    <p className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        placeholder={placeHolder || ""}
        name={name}
        id={name}
        className={className}
        required={required}
      />
    </p>
  );
};

export default FormRow;

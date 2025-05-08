import React from "react";

const MainInput = ({
  type,
  name,
  id,
  placeholder,
  className,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};

export default MainInput;

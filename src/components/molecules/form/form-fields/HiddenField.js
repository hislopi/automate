import React from "react";

export const HiddenField = ({ name, value, register }) => {
  return <input {...register(name)} type="hidden" value={value} />;
};

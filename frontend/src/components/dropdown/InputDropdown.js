import React, { useState } from "react";
import Select from "react-select";

const customStyles = {
  control: (base, state) => ({
    ...base,
    width: "80%",
    height: "42px",
    marginLeft: "10px",
    marginTop: "10px",
  }),
};

const InputDropdown = React.memo(({ options, setSelectedOption }) => {
  return (
    <Select
      onChange={setSelectedOption}
      options={options}
      styles={customStyles}
      required
    />
  );
});

export default InputDropdown;

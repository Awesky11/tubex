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
  const newOptions = [];

  options.map((item, index) => {
    newOptions.push({ label: item.title, value: item.slug });
  });

  return (
    <Select
      onChange={setSelectedOption}
      options={newOptions}
      styles={customStyles}
      required
    />
  );
});

export default InputDropdown;

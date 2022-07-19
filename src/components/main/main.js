import React, { useState } from "react";
import DropDown from "../common/dropDown/dropDown";

const Main = () => {
  const [selectedValue, setSeletedValue] = useState("");
  const dropDownChildValue = ["정우재", "금현호", "우리팀 화이팅"];

  console.log(selectedValue);
  return (
    <>
      <DropDown
        defaultValue={"사람"}
        childValue={dropDownChildValue}
        setSeletedData={setSeletedValue}
      />
    </>
  );
};

export default Main;

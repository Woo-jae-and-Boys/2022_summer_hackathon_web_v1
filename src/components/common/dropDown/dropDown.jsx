import styled from "styled-components";

const DropDown = ({ defaultValue, childValue, setSeletedValue }) => {
  return (
    <DropDownSelect
      onChange={(e) => {
        setSeletedValue(e.target.value);
      }}
    >
      <option selected disabled>
        {defaultValue}
      </option>
      {childValue.map((item) => {
        return <option>{item}</option>;
      })}
    </DropDownSelect>
  );
};

export const DropDownSelect = styled.select`
  outline: none;
  padding: 8px;
`;

export default DropDown;

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
      {childValue.map((item, idx) => {
        return <option key={idx}>{item}</option>;
      })}
    </DropDownSelect>
  );
};

export const DropDownSelect = styled.select`
  width: 100%;
  height: 57%;
  margin-top: 2%;
  padding-left: 10px;
  outline: none;
  font-size: 1.1rem;
  background-color: #efefef;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  option {
    background-color: #fff;
  }
`;

export default DropDown;

import * as React from "react";
import styled from "styled-components";
import { useEffect } from "react";

export default function ColorButton({
  color,
  isFirstColor,
  selectedButton,
  selectButtonSetter,
  keyCode,
}) {
  const nameSplit = color.color_name.split("");

  function handleClick(colorName) {
    selectButtonSetter(colorName);
    const checkedInput = document.getElementById(colorName);
    checkedInput.checked = true;
  }

  return (
    <StyledListItem key={keyCode}>
      <StyledInput
        name="radio"
        type="radio"
        id={color.color_name}
        defaultChecked={isFirstColor}
        value={color.color_name}
      />
      <Wrapper>
        <StyledButton
          name={color.color_name}
          variant={color.color_code}
          onClick={() => handleClick(color.color_name)}
          isSelected={selectedButton === color.color_name}
        ></StyledButton>
        <StyledLabel htmlFor={color.color_name}>{nameSplit}</StyledLabel>
      </Wrapper>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  list-style: none;
`;
const StyledInput = styled.input`
  display: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label`
  max-width: 150px;
`;

const StyledButton = styled.button`
  border: ${(props) => (props.isSelected ? "5px double #fff" : "none")};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.variant};
`;

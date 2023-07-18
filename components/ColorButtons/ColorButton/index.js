import * as React from "react";
import styled from "styled-components";

export default function ColorButton({
  color,
  isFirstColor,
  selectedColor,
  selectedColorSetter,
}) {
  const nameSplit = color.color_name.split("");

  function handleClick(color) {
    selectedColorSetter(color);
    const checkedInput = document.getElementById(color.color_name);
    checkedInput.checked = true;
  }

  return (
    <StyledListItem>
      <StyledInput
        name="radio"
        type="radio"
        id={color.color_name}
        defaultChecked={isFirstColor}
        value={color.color_name}
      />
      <StyledButton
        name={color.color_name}
        color={color.color_code}
        onClick={() => handleClick(color)}
        isSelected={selectedColor.color_name === color.color_name}
        onF
      >
        <StyledSpan color={color.color_code}></StyledSpan>
      </StyledButton>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  list-style: none;
  align-self: center;
`;
const StyledInput = styled.input`
  display: none;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  border: ${(props) =>
    props.isSelected ? "2px solid blue" : "2px solid transparent"};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: transparent;
`;

const StyledSpan = styled.div`
  border: 0.5px solid black;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: ${(props) => props.color};
`;

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
      <Wrapper>
        <StyledButton
          name={color.color_name}
          color={color.color_code}
          onClick={() => handleClick(color)}
          isSelected={selectedColor.color_name === color.color_name}
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
  background-color: ${(props) => props.color};
`;

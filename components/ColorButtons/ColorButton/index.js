import styled from "styled-components";

export default function ColorButton({
  color,
  selectedColor,
  selectedColorSetter,
}) {
  function handleClick() {
    selectedColorSetter(color);
  }

  return (
    <StyledListItem>
      <StyledButton
        name={color.color_name}
        color={color.color_code}
        onClick={handleClick}
        isSelected={selectedColor.color_name === color.color_name}
        aria-label={color.color_name}
      >
        <StyledColorCircle color={color.color_code} />
      </StyledButton>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  list-style: none;
  align-self: center;
`;

const StyledButton = styled.button`
  display: flex;
  cursor: pointer;
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

const StyledColorCircle = styled.div`
  border: 0.5px solid black;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: ${(props) => props.color};
`;

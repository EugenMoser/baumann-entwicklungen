import * as React from "react";
import ColorButton from "./ColorButton";
import strings from "../../helpers/strings";

import styled from "styled-components";

export default function ColorButtons({
  colors,
  selectedColor,
  selectedColorSetter,
  firstColorName,
}) {
  return (
    <StyledColorSection>
      <StyledLabel>{strings.chooseColor}</StyledLabel>
      {selectedColor && (
        <ButtonWrapper>
          {colors.map((color) => (
            <ColorButton
              color={color}
              isFirstColor={color.color_name === firstColorName}
              selectedColor={selectedColor}
              selectedColorSetter={selectedColorSetter}
              key={color.color_code}
            />
          ))}
        </ButtonWrapper>
      )}
    </StyledColorSection>
  );
}

const StyledColorSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.ul`
  display: flex;
`;

const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

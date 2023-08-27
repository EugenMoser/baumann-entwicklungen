import * as React from "react";
import ColorButton from "./ColorButton";
import { strings } from "../../helpers/strings";

import styled from "styled-components";

export default function ColorButtons({
  colors,
  selectedColor,
  selectedColorSetter,
  firstColorName,
}) {
  return (
    <StyledColorSection>
      <StyledLabel>
        {strings.colorLabel} <StyledSpan>{strings.chooseColor}</StyledSpan>
      </StyledLabel>
      <StyledParagraph>{selectedColor.color_name}</StyledParagraph>
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
  padding-bottom: 1.75rem;
  border-bottom: 1px solid #86868b;
`;

const ButtonWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  height: 50px;
  gap: 1rem;
`;

const StyledLabel = styled.label`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

const StyledSpan = styled.span`
  color: var(--font-color-varant);
`;

const StyledParagraph = styled.p`
  margin-bottom: 0.75rem;
`;

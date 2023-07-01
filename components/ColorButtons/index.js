import * as React from "react";
import ColorButton from "./ColorButton";
import { useState } from "react";

import styled from "styled-components";

export default function ColorButtons({
  colors,
  selectedColor,
  selectedColorSetter,
  firstColorName,
}) {
  return (
    <>
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
    </>
  );
}

const ButtonWrapper = styled.ul`
  display: flex;
`;

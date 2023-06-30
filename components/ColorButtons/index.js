import * as React from "react";
import ColorButton from "./ColorButton";
import { useState } from "react";

import styled from "styled-components";

export default function ColorButtons({
  colors,
  selectedColor,
  selectedColorSetter,
  firstColor,
}) {
  return (
    <ButtonWrapper>
      {colors.map((color) => (
        <ColorButton
          color={color}
          isFirstColor={color.color_name === firstColor}
          selectedColor={selectedColor}
          selectedColorSetter={selectedColorSetter}
          keyCode={color.color_code}
        />
      ))}
    </ButtonWrapper>
  );
}
const ButtonWrapper = styled.ul`
  display: flex;
`;

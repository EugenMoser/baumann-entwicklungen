import * as React from "react";
import ColorButton from "./ColorButton";
import { useState } from "react";

import styled from "styled-components";

export default function ColorButtons({
  colors,
  selectedButton,
  selectButtonSetter,
  firstColor,
}) {
  return (
    <ButtonWrapper>
      {colors.map((color) => (
        <ColorButton
          color={color}
          isFirstColor={color.color_name === firstColor}
          selectedButton={selectedButton}
          selectButtonSetter={selectButtonSetter}
          keyCode={color.color_code}
        />
      ))}
    </ButtonWrapper>
  );
}
const ButtonWrapper = styled.ul`
  display: flex;
`;

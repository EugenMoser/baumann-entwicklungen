import * as React from "react";
import ColorButton from "/components/ColorButton";
import { useState } from "react";

import styled from "styled-components";

export default function ColorButtons({ colors }) {
  const firstColor = colors[0].color_name;
  const [selectedButton, setSelectedButton] = useState(firstColor);

  function selectButtonSetter(colorName) {
    setSelectedButton(colorName);
  }

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

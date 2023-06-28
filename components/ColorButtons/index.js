import * as React from "react";
import { useState } from "react";

import styled from "styled-components";

export default function ColorButton({ color }) {
  console.log("color", color);

  function handleClick() {
    const checkedButton = document.getElementById(color.color_name);
    checkedButton.checked = true;
  }

  return (
    <>
      <StyledInput
        name="radio"
        type="radio"
        id={color.color_name}
        value={color.color_name}
      />
      <Wrapper>
        <StyledButton
          variant={color.color_code}
          onClick={() => handleClick()}
        ></StyledButton>
        <StyledLabel htmlFor={color.color_name}>
          {color.color_name}
        </StyledLabel>
      </Wrapper>
    </>
  );
}

const StyledInput = styled.input`
  display: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label``;

const StyledButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.variant};
`;

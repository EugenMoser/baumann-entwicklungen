import * as React from "react";

import styled, { css } from "styled-components";

import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";

function BurgerMenu({ sections, path }) {
  return (
    <StyledDropdown>
      <StyledMenuButton>
        <Icon
          path={mdiMenu}
          size={2}
        />
      </StyledMenuButton>
      <Menu>
        {sections.map((section, index) => {
          return (
            <StyledMenuItem
              key={index}
              onClick={() =>
                (location.href = `/products/${section.label}`)
              }
              variant={
                path.startsWith(`/products/${section.label}`)
                  ? "active"
                  : "inactive"
              }
            >
              <Icon
                path={section.icon}
                size={2}
              />
              {section.name}
            </StyledMenuItem>
          );
        })}
      </Menu>
    </StyledDropdown>
  );
}
export default BurgerMenu;

const StyledDropdown = styled(Dropdown)`
  display: flex;
  justify-content: right;
`;

const StyledMenuButton = styled(MenuButton)`
  border: none;
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 2rem;

  ${({ variant }) =>
    variant === "active" &&
    css`
      color: var(--font-color-hover);
    `}
`;

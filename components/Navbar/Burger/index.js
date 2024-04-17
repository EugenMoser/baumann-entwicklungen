import * as React from 'react';

import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import {
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
} from '@mui/joy';

function BurgerMenu({ sections, path }) {
  const router = useRouter();
  return (
    <>
      <h2>
        {sections.map(
          (section) => path.includes(section.category) && section.name
        )}
      </h2>
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
                  router.push(`/products/${section.category}`)
                }
                variant={
                  path.startsWith(`/products/${section.category}`)
                    ? 'active'
                    : 'inactive'
                }
              >
                <Icon
                  path={section.icon}
                  size={1}
                />
                {section.name}
              </StyledMenuItem>
            );
          })}
        </Menu>
      </StyledDropdown>
    </>
  );
}
export default BurgerMenu;

const StyledDropdown = styled(Dropdown)`
  display: flex;
  justify-content: right;
`;

const StyledMenuButton = styled(MenuButton)`
  border: none;
  &:hover,
  :focus {
    background-color: var(--background-category-hover-color);
  }
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 1.5rem;
  &:hover,
  :focus {
    background-color: var(--background-category-hover-color);
  }
  ${({ variant }) =>
    variant === 'active' &&
    css`
      color: var(--font-color-hover);
    `}
`;

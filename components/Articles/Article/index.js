import * as React from 'react';
import { useEffect } from 'react';

import styled from 'styled-components';

import Option from '@mui/joy/Option';

export default function Article({
  article,
  isArticleDescriptionAvailableSetter,
}) {
  useEffect(() => {
    if (article.article_description.length === 0) {
      isArticleDescriptionAvailableSetter(false);
    }
  }, []);
  return (
    <option value={article.article_id}>
    <StyledOption value={article.article_id}>
      {article.article_description}
    </option>
    </StyledOption>
  );
}

const StyledOption = styled(Option)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
`;

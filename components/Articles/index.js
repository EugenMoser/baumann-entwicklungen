import * as React from "react";
import Article from "./Article";
import styled from "styled-components";
import strings from "../../helpers/strings";

export default function Articles({ articles, selectedArticleSetter }) {
  function handleOnChange(articleId) {
    selectedArticleSetter(articleId);
  }
  return (
    <StyledArticleSection>
      <StyledLabel htmlFor="article">
        {strings.articleVaraintLabel}
        <StyledSpan> {strings.articleVariant}</StyledSpan>
      </StyledLabel>
      <StyledSelect
        id="article"
        name="article"
        onChange={(option) => handleOnChange(option.target.value)}
        defaultValue={99}
        required
      >
        <option
          value="99"
          disabled
        >
          Bitte wählen
        </option>
        {articles.map((article) => (
          <Article
            article={article}
            key={article.article_id}
          />
        ))}
      </StyledSelect>
    </StyledArticleSection>
  );
}

const StyledArticleSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #86868b;
`;

const StyledLabel = styled.label`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.25rem;
`;

const StyledSpan = styled.span`
  color: var(--font-color-varant);
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 2rem;
  padding: 0 0.5rem;
  font-size: 1rem;
`;

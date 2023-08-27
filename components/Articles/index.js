import * as React from "react";
import { useState, useEffect } from "react";
import Article from "./Article";
import styled from "styled-components";
import { strings } from "../../helpers/strings";

export default function Articles({ articles, selectedArticleSetter }) {
  const [defaultArticle, setDefaultArticle] = useState(9999);
  const [isArticleDescriptionAvailable, setIsArticleDescriptionAvailable] =
    useState(true);

  function isArticleDescriptionAvailableSetter() {
    setIsArticleDescriptionAvailable(!isArticleDescriptionAvailable);
  }

  useEffect(() => {
    if (articles.length === 1) {
      setDefaultArticle(articles[0].article_id);
      selectedArticleSetter(articles[0].article_id);
    } else {
      setDefaultArticle(9999);
    }
  }, []);

  function handleOnChange(articleId) {
    selectedArticleSetter(articleId);
  }

  return (
    <StyledArticleSection
      isArticleDescriptionAvailable={isArticleDescriptionAvailable}
    >
      <StyledLabel htmlFor="article">
        {strings.articleVaraintLabel}
        <StyledSpan> {strings.articleVariant}</StyledSpan>
      </StyledLabel>
      <StyledSelect
        id="article"
        name="article"
        onChange={(option) => handleOnChange(Number(option.target.value))}
        defaultValue={defaultArticle && defaultArticle}
        required
      >
        {defaultArticle === 9999 && (
          <option
            value="9999"
            disabled
          >
            Bitte wählen
          </option>
        )}
        {articles.map((article) => (
          <Article
            article={article}
            key={article.article_id}
            isArticleDescriptionAvailableSetter={
              isArticleDescriptionAvailableSetter
            }
          />
        ))}
      </StyledSelect>
    </StyledArticleSection>
  );
}

const StyledArticleSection = styled.section`
  /* display: flex; */
  display: ${(props) =>
    props.isArticleDescriptionAvailable === false && "none"};

  flex-direction: column;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid var(--font-color-varant);
`;

const StyledLabel = styled.label`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
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

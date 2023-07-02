import * as React from "react";
import Article from "./Article";
import styled from "styled-components";

export default function Articles({ articles, selectedArticleSetter }) {
  function handleOnChange(articleId) {
    selectedArticleSetter(articleId);
  }
  return (
    <StyledArticleSection>
      <StyledLabel htmlFor="article">
        Bitte Produkt-Variante wählen
      </StyledLabel>
      <select
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
      </select>
    </StyledArticleSection>
  );
}

const StyledArticleSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

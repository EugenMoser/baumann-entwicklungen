import { useEffect, useState } from "react";

import styled from "styled-components";

import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Select } from "@mui/joy";

import { strings } from "../../helpers/strings";
import Article from "./Article";

export default function Articles({ articles, selectedArticleSetter }) {
  const [isArticleDescriptionAvailable, setIsArticleDescriptionAvailable] =
    useState(true);

  useEffect(() => {
    if (articles.length === 1) {
      selectedArticleSetter(articles[0].article_id);
    }
  }, [articles, selectedArticleSetter]);

  function handleOnChange(event, value) {
    // value is the selected option's value (article_id)
    selectedArticleSetter(value);
  }

  function hideArticleDescription() {
    setIsArticleDescriptionAvailable(false);
  }

  const sortedArticles = [...articles].sort(
    (a, b) => a.article_prio - b.article_prio,
  );

  return (
    <StyledArticleSection
      isArticleDescriptionAvailable={isArticleDescriptionAvailable}
    >
      <StyledLabel htmlFor="article">
        {strings.articleVariantLabel}
      </StyledLabel>
      <StyledSpan> {strings.articleVariant}</StyledSpan>

      <StyledSelect
        id="article"
        name="article"
        placeholder="Bitte wählen"
        indicator={<KeyboardArrowDown />}
        renderValue={(value) =>
          // renderValue should not cause side-effects; just show label or value
          (value && value.label) || value || ""
        }
        onChange={handleOnChange}
        slotProps={{
          listbox: {
            sx: { minWidth: 180 },
          },
        }}
        required
      >
        {sortedArticles.map((article) => (
          <Article
            article={article}
            key={article.article_id}
            isArticleDescriptionAvailableSetter={hideArticleDescription}
          />
        ))}
      </StyledSelect>
    </StyledArticleSection>
  );
}

const StyledArticleSection = styled.section`
  display: flex;
  display: ${(props) =>
    props.isArticleDescriptionAvailable === false && "none"};

  flex-direction: column;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid var(--font-color-varant);
`;

const StyledLabel = styled.label`
  font-size: 1.25rem;
  font-weight: bold;
`;

const StyledSpan = styled.span`
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  color: var(--font-color-varant);
`;

const StyledSelect = styled(Select)`
  width: 100%;
  height: 2rem;
  padding: 0 0.5rem;
  font-size: 1rem;
`;

import * as React from "react";
import { useState } from "react";
import Article from "./Article";

export default function Articles({ articles, selectedArticleSetter }) {
  function handleOnChange(articleId) {
    selectedArticleSetter(articleId);
  }
  return (
    <>
      <label htmlFor="article">Bitte Produkt-Variante wählen</label>
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
    </>
  );
}

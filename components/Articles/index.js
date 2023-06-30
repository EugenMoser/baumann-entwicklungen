import * as React from "react";
import Article from "./Article";

export default function Articles({ articles, selectedArticleSetter }) {
  function handleOnChange(value) {
    console.log("value", value);
    selectedArticleSetter(value);
  }
  return (
    <>
      <label htmlFor="article">Bitte Variante wählen</label>
      <select
        id="article"
        name="article"
        onChange={(option) => handleOnChange(option.target.value)}
        required
      >
        <option
          value="0"
          selected
          disabled
        >
          Bitte wählen
        </option>
        {articles.map((article) => (
          <Article article={article} />
        ))}
      </select>
    </>
  );
}

import * as React from "react";
import Article from "./Article";
// import MenuItem from "@mui/material/MenuItem";

export default function Articles({
  articles,

  articleVariantSetter,
}) {
  return (
    <>
      <label htmlFor="article">Bitte Variante wählen</label>
      <select
        id="article"
        name="article"
        onChange={(option) => articleVariantSetter(option.target.value)}
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

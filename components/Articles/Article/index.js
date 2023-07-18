import * as React from "react";
import { useEffect } from "react";

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
      {article.article_description}
    </option>
  );
}

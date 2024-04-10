import * as React from "react";
import { useEffect } from "react";

import Option from "@mui/joy/Option";

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
    <Option value={article.article_id}>
      {article.article_description}
    </Option>
  );
}

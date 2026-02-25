import { useEffect } from "react";

import { Option } from "@mui/joy";

export default function Article({
  article,
  isArticleDescriptionAvailableSetter,
}) {
  useEffect(() => {
    if (!article.article_description?.length) {
      isArticleDescriptionAvailableSetter(false);
    }
  }, [article.article_description, isArticleDescriptionAvailableSetter]);

  return (
    <Option value={article.article_id}>
      {article.article_description}
    </Option>
  );
}

import * as React from "react";

export default function Article({ article }) {
  return (
    <option value={article.article_number}>
      {article.article_description}

      {/* {article.vpe &&
        article.vpe.map((vpe) => <li key={vpe}>VPE: {vpe}</li>)} */}
    </option>
    // </li>
  );
}

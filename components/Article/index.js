import * as React from "react";
// import MenuItem from "@mui/material/MenuItem";

export default function Article({ article }) {
  return (
    // <li key={article.article_id}>
    <>
      {/* <MenuItem value={article.article_name}>
        {article.article_name}
      </MenuItem> */}
      <ul>
        <p>{article.article_number}</p>
        <p>{article.article_name}</p>
        <p>{article.article_description}</p>

        {article.vpe &&
          article.vpe.map((vpe) => <li key={vpe}>VPE: {vpe}</li>)}
      </ul>
    </>
    // </li>
  );
}

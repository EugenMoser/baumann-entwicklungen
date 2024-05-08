// import { createDbConnection } from "../../../helpers/dbconnection";

// async function handlerByCategory(req, res) {
//   try {
//     const dbconnection = await createDbConnection();
//     const query = `

// SELECT product.*,
// (
//     SELECT JSON_ARRAYAGG(
//       JSON_OBJECT(
//           'article_id', article.article_id,
//           'product_id', article.product_id,
//           'article_prio', article.article_prio,
//           'article_number', article.article_number,
//           'article_name', article.article_name,
//           'article_description', article.article_description,
//           'article_description1', article.article_description1,
//           'article_description2', article.article_description2,
//           'article_description3', article.article_description3,
//           'vpe1', article.vpe1,
//           'vpe2', article.vpe2,
//           'vpe3', article.vpe3,
//           'vpe4', article.vpe4
//       )
//     )
//     FROM article
//     WHERE article.product_id = product.product_id
//     ) as articles,
//   (
//     SELECT JSON_ARRAYAGG(
//       JSON_OBJECT('suffix', product_color_connection.color_suffix,
//        'color_name',color.color_name, 'color_id',color.color_id, 'color_code',color.color_code))
//     FROM product_color_connection
//     LEFT JOIN color ON  product_color_connection.color_id = color.color_id
//     WHERE product_color_connection.product_id = product.product_id
//    order by product_color_connection.color_suffix
//   )AS colors
// FROM product

// `;
//     const [data] = await dbconnection.execute(query);
//     dbconnection.end();
//     res.status(200).json({ products: data });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }
// export default handlerByCategory;

// // GROUP BY product.product_id , product.prio, product.category
import { sql } from '@vercel/postgres';

async function handlerByCategory(req, res) {
  try {
    const { rows } = await sql`

    SELECT 
    product.*,
    (
        SELECT 
            JSON_AGG(
                JSON_BUILD_OBJECT(
                    'article_id', article.article_id,
                    'product_id', article.product_id,
                    'article_prio', article.article_prio,
                    'article_number', article.article_number,
                    'article_name', article.article_name,
                    'article_description', article.article_description,
                    'article_description1', article.article_description1,
                    'article_description2', article.article_description2,
                    'article_description3', article.article_description3,
                    'vpe1', article.vpe1,
                    'vpe2', article.vpe2,
                    'vpe3', article.vpe3,
                    'vpe4', article.vpe4
                )
            )
        FROM 
            article
        WHERE 
            article.product_id = product.product_id
    ) AS articles,
    (
      SELECT 
      JSON_AGG(
        JSON_BUILD_OBJECT(
          'suffix', product_color_connection.color_suffix,
          'color_name',color.color_name, 
          'color_id',color.color_id, 
          'color_code',color.color_code
          )
          ORDER BY product_color_connection.color_suffix
      )
        FROM product_color_connection
        LEFT JOIN color ON  product_color_connection.color_id = color.color_id
        WHERE product_color_connection.product_id = product.product_id
        
        )AS colors
FROM 
    product 

`;

    res.status(200).json({ products: rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export default handlerByCategory;

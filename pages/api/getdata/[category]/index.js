import { createDbConnection } from "../../../../helpers/dbconnection";

async function handlerByCategory(req, res) {
  const { category } = req.query; // Extrahieren Sie den Wert von 'category' aus der URL
  try {
    const dbconnection = await createDbConnection();
    const query = `SELECT * FROM product WHERE category = ?`;
    const values = [`${category}`];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ products: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export default handlerByCategory;

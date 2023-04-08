import { createDbConnection } from "../../../../../helpers/dbconnection";

async function handlerById(req, res) {
  const { category, id } = req.query; // Extrahieren Sie den Wert von 'id' aus der URL
  try {
    const dbconnection = await createDbConnection();
    const query = `SELECT * FROM product WHERE category = ? AND product_id = ?`;
    const values = [`${category}`, `${id}`];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ products: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export default handlerById;

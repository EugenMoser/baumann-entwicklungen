import { getAllProductsFromDB } from "../../../helpers/db-services";

async function handler(req, res) {
  try {
    const products = await getAllProductsFromDB();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default handler;

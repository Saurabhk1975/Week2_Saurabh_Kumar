import pool from "./pgConfig";

async function checkTable(Table_Name: string): Promise<void> {
  try {
    const checkQuery = `SELECT EXISTS (
          SELECT 1
          FROM information_schema.tables
          WHERE table_name = $1
        )`;
    const checkResult = await pool.query(checkQuery, [Table_Name]);
    const tableExists = checkResult.rows[0].exists;

    if (!tableExists) {
      // Create the table if it doesn't exist
      const createQuery = `CREATE TABLE ${Table_Name} (
            id SERIAL PRIMARY KEY,
            orderID TEXT UNIQUE,
          )`;
      await pool.query(createQuery);
      console.log(`Table '${Table_Name}' created successfully.`);
    } else {
      console.log(`Table '${Table_Name}' already exists.`);
    }
  } catch (err) {
    console.error("Error checking or creating table:", err);
  }
}

// data Inserting
export async function createOrder(orders: any) {
  try {
    console.log(orders);
    await checkTable("testing");
    for (const order of orders) {
      await pool.query("INSERT INTO testing (orderID) VALUES ($1)", [
        order.orderID,
      ]);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
// Reading data for testing
export async function getOrders(): Promise<any[]> {
  const query = "SELECT * FROM testing";
  const result = await pool.query(query);
  return result.rows;
}

import express from "express";
import { createOrder, getOrders } from "./service";

const app = express();
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Home page");
});

// ----------------------------------------------------------------------------------

app.post("/orders", async (req, res) => {
  const orders = req.body.items.filter((item: any) => {
    return item.OrderBlocks.some((block: any) => {
      if (Array.isArray(block.lineNo)) {
        return block.lineNo.some((num: number) => num % 3 === 0);
      }
      return block.lineNo % 3 === 0;
    });
  });

  //console.log(orders);
  const result = await createOrder(orders);
  res.send("Orders created successfully");
});

app.get("/orders", async (req, res) => {
  const users = await getOrders();
  res.json(users);
});

app.post("/jsfunction", (req, res) => {
  let num = req.body.num;
  if (!Array.isArray(num)) {
    num = [num];
  }
  const mpVal = num.map((n: number) => n * n);
  const FiltVal = num.filter((n: number) => n % 2 === 0);
  const redVal = num.reduce((sum: number, n: number) => sum + n, 0);
  res.json({
    map: mpVal,
    filter: FiltVal,
    reduce: redVal,
  });
});

//------------------------------------------------------------------------------------
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

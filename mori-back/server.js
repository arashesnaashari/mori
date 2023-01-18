const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const client = new MongoClient("mongodb://mongo:27017");
const dbName = "test";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.get("/kafsh/:page", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("bani");
  let n = +req.params.page - 1;
  let x = 9 * n + 1;
  const findResult = await collection.find({}).skip(x).limit(9).toArray();
  const tool = await collection.countDocuments();
  res.send([tool, findResult]);
});

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});

import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
const app = express();
app.use(express.json());
app.use(cors());

const MONGODB_URL =
  "mongodb+srv://gowthaman:hello123@cluster0.qbqcx.mongodb.net/";
async function createConnection() {
  const client = new MongoClient(MONGODB_URL);
  await client.connect();
  console.log("mongo connected");
  return client;
}
export const client = await createConnection();
app.post("/login", async function (req, res) {
  const { username, password } = req.body;
  const user = await client
    .db("gowtham")
    .collection("user_info")
    .findOne({ username: username });
  if (user) {
    if (user.password === password) {
      res.send("login successfully");
    } else {
      res.status(401).send("Invalid password");
    }
  } else {
    res.status(401).send("Invalid username");
  }
});

app.post("/signin", async function (req, res) {
  const { username, password } = req.body;
  const user = await client
    .db("gowtham")
    .collection("user_info")
    .findOne({ username: username });
  if (user) {
    res.status(401).send("User already exists");
  } else {
    await client.db("gowtham").collection("user_info").insertOne(req.body);
    res.send("signup successfully");
  }
});

app.get("/", (req, res) => {
  res.send("hello");
});

const port = 8000;
app.listen(port, () => console.log("done"));

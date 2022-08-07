import {MongoClient} from "mongodb";
import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import {equipmentsRouter} from './routes/equipments.js';
import {usersRouter} from './routes/users.js';




dotenv.config();
// console.log(process.env.MONGO_URL);

const app = express();

const PORT = process.env.PORT || 4000;

// const MONGO_URL = "mongodb://127.0.0.1";
// const PORT=4000;
const MONGO_URL = process.env.MONGO_URL;
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌😊");
  return client;
}

 
export const client = await createConnection();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});


app.use('/equipments',equipmentsRouter);
app.use('/users',usersRouter);

app.listen(PORT, () => console.log(`App started in ${PORT}`));
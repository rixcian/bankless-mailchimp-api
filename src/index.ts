import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import {Request, Response} from "express";

require('dotenv').config();
import router from "./routes";


const PORT = process.env.PORT || 8000;
const app = express();

// CORS Setting
app.use(cors());

// BodyParser Setting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serving Frontend
app.get('/', async (req: Request, res: Response) => {
  res.status(404).send();
});

app.use('/api', router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT} ...`));

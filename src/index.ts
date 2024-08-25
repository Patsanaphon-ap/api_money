import express from "express";
import bodyParser from "body-parser"
import cors from "cors"
import env from "./config/env.config"

import { notFoundHandler } from "./middlewares";

import { profileRouter , transferRouter, exchangeRouter} from "./routers";

const app = express();

const corsOptions = {
      methods: ["GET", "PUT", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 204,
      maxAge: 3600,
    };

const urlencoded = bodyParser.urlencoded({ extended: true });
const jsonParser = bodyParser.json({ limit: "50mb" });

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(jsonParser);
app.use(urlencoded);

app.use("/exchange", exchangeRouter);
app.use("/profile", profileRouter);
app.use("/money", transferRouter);

app.route("/*").all(notFoundHandler);

app.listen(env.PORT, function () {
        console.log(`Server listening on port ${env.PORT}`);
})
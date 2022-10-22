import path from "path";
import process from "process";

// import { createEngine } from "express-react-views";
import expressReactViews from "express-react-views";
import express from "express";

import routes from "./src/server/routes";

const PORT =
    process.env.SERVER_PORT || process.env.NODE_ENV === "development"
        ? 4000
        : 3000;
const app = express();

console.log(`NODE_ENV is "${process.env.NODE_ENV}"`);
app.enable("trust proxy");
app.set("views", path.resolve("./src/server"));
app.set("view engine", "jsx");

app.engine("jsx", expressReactViews.createEngine());
app.use(express.static("./dist"));
app.use(express.json(), express.urlencoded({ extended: false }), routes);

app.on("error", error => console.error(error.stack));

app.listen(PORT, error => {
    if (error) throw error;

    console.log(`[localhost:${PORT}] Up!`);
});

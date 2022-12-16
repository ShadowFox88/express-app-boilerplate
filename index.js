/* eslint-disable no-console */
import process from "process";

import compression from "compression";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import config from "./src/server/config";
import routes from "./src/server/routes";
import webpackConfig from "./webpack.config";

const PORT = config.PORT || 3000;
const app = express();

if (process.env.NODE_ENV === "development") {
    const compiler = webpack(webpackConfig);
    const isWebpackResource = /(\.(?!html)\w+$|__webpack.*)/;

    const catchAllToEntryPoint = (req, res, next) => {
        if (!(isWebpackResource.test(req.url) || req.url.startsWith("/api"))) {
            req.url = "/";
        }

        next();
    };

    app.enable("trust proxy");
    app.use(
        catchAllToEntryPoint,
        webpackDevMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
        }),
        webpackHotMiddleware(compiler, {
            log: console.log,
            path: "/__webpack_hmr",
            heartbeat: 10 * 1000,
        })
    );
}

app.use(
    express.static("./dist"),
    express.static("./public"),
    express.json(),
    express.urlencoded({ extended: false }),
    compression(),
    routes
);

app.on("error", error => console.error(error.stack));
app.listen(PORT, () => console.log(`[localhost:${PORT}] Up!`));

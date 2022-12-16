import path from "path";
import process from "process";

import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { merge } from "webpack-merge";

import development from "./webpack.dev.js";
import production from "./webpack.prod.js";

const IS_DEV = process.env.NODE_ENV === "development";
const [MODE, chosen] = IS_DEV
    ? ["development", development]
    : ["production", production];
const common = {
    entry: {
        index: { import: "./src/pages/App.jsx", dependOn: "shared" },
        shared: ["lodash", "react", "react-dom", "react-router-dom"],
    },
    mode: MODE,
    module: {
        rules: [
            {
                include: path.resolve("./public"),
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: "asset",
            },
            {
                include: path.resolve("./src"),
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                include: path.resolve("./src"),
                test: /\.jsx?$/i,
                use: {
                    loader: "swc-loader",
                    options: {
                        jsc: {
                            transform: {
                                react: {
                                    refresh: IS_DEV,
                                },
                            },
                        },
                    },
                },
            },
        ],
    },
    optimization: {
        runtimeChunk: "single",
    },
    output: {
        clean: true,
        publicPath: "/",
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: "react",
        }),
        new HtmlWebpackPlugin({
            favicon: "./public/favicon.ico",
            minify: true,
            template: path.resolve("./public/index.html"),
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve("./src"),
            "/public": path.resolve("./public"),
        },
        enforceExtension: false,
        extensions: ["...", ".js", ".jsx"],
        preferRelative: true,
    },
};

export default merge(common, chosen);

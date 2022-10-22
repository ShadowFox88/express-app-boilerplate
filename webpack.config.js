import path from "path";
import process from "process";

import "dotenv/config";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from "webpack-merge";

import development from "./webpack.dev.js";
import production from "./webpack.prod.js";

const IS_DEV = process.env.NODE_ENV === "development";
const IS_PROD = process.env.NODE_ENV === "production";
const MODE = IS_PROD ? "production" : "development";
const chosen = IS_PROD ? production : development;

const common = {
    entry: {
        index: { import: "./src/client/App.jsx", dependOn: "shared" },
        shared: ["lodash", "react-dom", "react-router-dom"],
    },
    mode: MODE,
    module: {
        rules: [
            {
                include: path.resolve("./public"),
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: "asset/resource",
            },
            {
                include: path.resolve("./src/client"),
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                include: path.resolve("./src/client"),
                test: /\.m?jsx$/i,
                use: {
                    loader: "swc-loader",
                    options: {
                        jsc: {
                            transform: {
                                react: {
                                    development: IS_DEV,
                                    refresh: IS_DEV,
                                },
                            },
                        },
                    },
                },
            },
        ],
    },
    output: {
        clean: true,
        filename: "[name].[contenthash].js",
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: "react",
        }),
        new HtmlWebpackPlugin({
            favicon: "./public/favicon.ico",
            minify: true,
            template: path.resolve("./src/server/template.html"),
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve("./src"),
        },
        enforceExtension: false,
        extensions: ["...", ".mjs", ".jsx"],
        preferRelative: true,
    },
};

console.log(`Mode is "${MODE}"\n`);

export default merge(common, chosen);

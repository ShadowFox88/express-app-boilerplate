import path from "path";
import process from "process";

import "dotenv/config";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from "webpack-merge";

import development from "./webpack.dev.js";
import production from "./webpack.prod.js";

const mode = process.env.NODE_ENV ?? "production";
const chosen = mode === "production" ? production : development;
const common = {
    entry: {
        index: { import: "./src/client/App.jsx", dependOn: "shared" },
        shared: ["lodash", "react-dom", "react-router-dom"],
    },
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
                loader: "swc-loader",
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
    mode,
};

console.log(`Mode is "${mode}"\n`);

export default merge(common, chosen);

import path from "path";
import process from "process";

const SERVER_PORT =
    process.env.SERVER_PORT || process.env.NODE_ENV === "development"
        ? 4000
        : 3000;

export default {
    devServer: {
        historyApiFallback: {
            index: "/",
        },
        port: process.env.DEV_SERVER_PORT || 3000,
        proxy: {
            "**": `http://localhost:${SERVER_PORT}`,
        },
        static: path.resolve("./public"),
    },
    devtool: "inline-source-map",
};

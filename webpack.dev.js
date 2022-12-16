import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import webpack from "webpack";

import config from "./src/server/config.js";

const PORT = config.PORT || 3000;

export default {
    devServer: {
        historyApiFallback: true,
        host: "0.0.0.0",
        hot: true,
        port: PORT,
        watchFiles: [
            "./public/index.html",
            "./src/components/**/*.jsx",
            "./src/pages/**/*.jsx",
            "./public/**/*",
        ],
    },
    devtool: "inline-source-map",
    entry: {
        index: ["webpack-hot-middleware/client", "./src/pages/App.jsx"],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ],
};

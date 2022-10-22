import process from "process";

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const plugins = [];

if (process.env.ANALYZE === "true") {
    plugins.push(new BundleAnalyzerPlugin());
}

export default {
    devtool: "source-map",
    optimization: {
        minimize: true,
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
        },
    },
    output: {
        pathinfo: false,
    },
    resolve: {
        symlinks: false,
    },
    plugins,
};

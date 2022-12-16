export default {
    devtool: "source-map",
    optimization: {
        minimize: true,
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
};

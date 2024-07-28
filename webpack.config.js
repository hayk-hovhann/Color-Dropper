const {mode} = require("webpack-nano/argv");
const {merge} = require("webpack-merge");
const parts = require("./webpack.parts");
const path = require("path");

const commonConfig = merge([
    {
        entry: ["./src"],
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        }
    },
    parts.page({title: "Color Dropper"}),
    parts.extractCSS(),
    parts.svgLoader(),
    parts.loadImages({ limit: 15000 }),
    parts.tsLoader()
]);

const productionConfig = merge([parts.eliminateUnusedCSS()]);

const developmentConfig = merge([
    {entry: ["webpack-plugin-serve/client"]},
    parts.devServer(),
]);

const getConfig = (mode) => {
    switch (mode) {
        case "production":
            return merge(commonConfig, productionConfig, {mode});
        case "development":
            return merge(commonConfig, developmentConfig, {mode});
        default:
            throw new Error(`Trying to use an unknown mode, ${mode}`);
    }
};

module.exports = getConfig(mode);

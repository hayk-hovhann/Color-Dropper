const {WebpackPluginServe} = require("webpack-plugin-serve");
const {MiniHtmlWebpackPlugin} = require("mini-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const glob = require("glob");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const ALL_FILES = glob.sync(path.join(__dirname, "src/*.js"));

exports.tsLoader = () => ({
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    }
})

exports.svgLoader = () => ({
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
        ],
    }
})

exports.loadImages = ({ limit } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: "asset",
                parser: { dataUrlCondition: { maxSize: limit } },
            }
        ],
    },
});

exports.autoprefix = () => ({
    loader: "postcss-loader",
    options: {
        postcssOptions: { plugins: [require("autoprefixer")()] },
    },
});

exports.eliminateUnusedCSS = () => ({
    plugins: [
        new PurgeCSSPlugin({
            paths: ALL_FILES, // Consider extracting as a parameter
            extractors: [
                {
                    extractor: (content) =>
                        content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
                    extensions: ["html"],
                },
            ],
        }),
    ],
});

exports.devServer = () => ({
    watch: true,
    plugins: [
        new WebpackPluginServe({
            port: parseInt(process.env.PORT, 10) || 8080,
            static: "./dist",
            host: "127.0.0.1",
            liveReload: true,
            waitForBuild: true,
        }),
    ],
});

exports.page = ({title}) => ({
    plugins: [new MiniHtmlWebpackPlugin({context: {title}})],
});

exports.loadCSS = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {importLoaders: 1},
                    },
                    "css-loader"]
            },
        ],
    },
});

exports.extractCSS = ({options = {}, loaders = []} = {}) => {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options
                        },
                        "css-loader",
                    ].concat(loaders),
                    sideEffects: true,
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
            }),
        ],
    };
};
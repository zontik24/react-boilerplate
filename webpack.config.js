const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.(css)$/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    watch: true,
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 100
    }
};
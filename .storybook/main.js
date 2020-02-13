module.exports = {
    stories: [
        '../src/stories/**/*.stories.{ts,tsx}'
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve("awesome-typescript-loader")
                }
            ],
        });

        config.module.rules.push({
            test: /\.(css)$/,
            use: [
                {
                    loader: require.resolve("style-loader")
                },
                {
                    loader: require.resolve('typings-for-css-modules-loader'),
                    options: {
                        modules: true,
                        namedExport: true,
                        camelCase: true,
                        localIdentName: "[name]__[local]___[hash:base64:5]"
                    }
                }
            ]
        });

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    },
};
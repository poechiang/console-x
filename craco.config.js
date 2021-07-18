const CracoAntDesignPlugin = require('craco-antd');
const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');
const { resolve } = require('path');

module.exports = {
    webpack: {
        alias: {
            '@assets': resolve(__dirname, './src/assets/'),
            '@pages': resolve(__dirname, './src/pages/'),
            '@lib': resolve(__dirname, './src/lib/'),
            '@components': resolve(__dirname, './src/components/'),
        },
    },
    plugins: [
        // {
        //     plugin: CracoAntDesignPlugin,
        //     options: {
        //         customizeTheme: {
        //             '@body-background': '#212121',
        //             '@menu-dark-bg': 'transparent',
        //             '@heading-color': '#ffffff',
        //             '@primary-color': '#61dafb',
        //             '@text-color': '#ffffff88',
        //         },
        //     },
        // },
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: './src',
                tsConfigPath: './tsconfig.extend.json',
            },
        },
    ],
};

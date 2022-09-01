const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = defineConfig({
    filenameHashing: false,
    transpileDependencies: [
        "vuetify"
    ],
    configureWebpack: {
        plugins: [new BundleAnalyzerPlugin()],
        output: {
            chunkFilename: 'js/[name].js'
        },
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                            return `npm.${packageName.replace('@', '')}`;
                        },
                    },
                },
            },
        },
    },
    pages: {
        Home: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Iconvu - Home',
            chunks: ['chunk-vendors', 'chunk-common', 'Home']
        },
        Privacy: {
            entry: 'src/privacymain.js',
            template: 'public/privacy.html',
            filename: 'privacy.html',
            title: 'Iconvu - Privacy',
            chunks: ['chunk-vendors', 'chunk-common', 'Privacy']
        }
    }
},
   
)

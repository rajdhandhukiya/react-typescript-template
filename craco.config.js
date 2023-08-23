const { CracoAliasPlugin, configPaths } = require('react-app-rewire-alias');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const CracoLessPlugin = require('craco-less');

const aliasMap = configPaths('./tsconfig.paths.json');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#6E3BD1',
              '@page-header-heading-title': '24px',
              '@btn-border-radius-base': '4px',
              '@btn-border-radius-sm': '4px'
            },
            javascriptEnabled: true
          }
        }
      }
    },
    {
      plugin: CracoAliasPlugin,
      options: { alias: aliasMap }
    }
  ],
  webpack: {
    plugins: {
      add: [new NodePolyfillPlugin()]
    }
  }
};

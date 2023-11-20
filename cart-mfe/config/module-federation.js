const { ModuleFederationPlugin } = require('webpack').container;
const { UniversalFederationPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'cartMFE',
    filename: 'remoteEntry.js',
    remotes: {},
    exposes: {
      './cartToggle': './src/components/cart/cartToggle',
    },
    shared: {
      react: {
        singleton: true,
        version: '0',
        requiredVersion: false,
      },
      'react-dom': {
        singleton: true,
        version: '0',
        requiredVersion: false,
      },
      'context-manager': {
        singleton: true,
        version: '0',
        requiredVersion: false,
      },
    },
  }),
  server: [
    new UniversalFederationPlugin({
      name: 'cartMFE',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module' },
      isServer: true,
      remotes: {},
      exposes: {
        './cartToggle': './src/components/cart/cartToggle',
      },
      shared: {
        react: {
          singleton: true,
          version: '0',
          requiredVersion: false,
        },
        'react-dom': {
          singleton: true,
          version: '0',
          requiredVersion: false,
        },
        'context-manager': {
          singleton: true,
          version: '0',
          requiredVersion: false,
        },
      },
    }),
  ],
};

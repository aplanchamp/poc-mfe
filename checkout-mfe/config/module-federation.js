const { ModuleFederationPlugin } = require('webpack').container;
const { UniversalFederationPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'checkoutMFE',
    filename: 'remoteEntry.js',
    remotes: {},
    exposes: {
      './information': './src/components/checkout/userInfos',
      './payment': './src/components/checkout/payment',
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
      name: 'checkoutMFE',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module' },
      isServer: true,
      remotes: {},
      exposes: {
        './information': './src/components/checkout/userInfos',
        './payment': './src/components/checkout/payment',
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

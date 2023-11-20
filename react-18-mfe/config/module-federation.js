const { ModuleFederationPlugin } = require('webpack').container;
const { UniversalFederationPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'test18MFE',
    filename: 'remoteEntry.js',
    remotes: {},
    exposes: {
      './test': './src/components/test',
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
      name: 'test18MFE',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module' },
      isServer: true,
      remotes: {},
      exposes: {
        './test': './src/components/test',
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

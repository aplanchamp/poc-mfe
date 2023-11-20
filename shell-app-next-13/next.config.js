const NextFederationPlugin = require('@module-federation/nextjs-mf');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    const location = options.isServer ? 'server' : 'client';
    // remove this condition if you want to use "dynamic" and prevent error on server side
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            checkout: `checkoutMFE@http://localhost:3001/${location}/remoteEntry.js`,
            cart: `cartMFE@http://localhost:3002/${location}/remoteEntry.js`,
            testRemote: `test18MFE@http://localhost:3003/${location}/remoteEntry.js`,
          },
          shared: {
            'context-manager': {
              singleton: true,
              requiredVersion: '1.0.0',
            },
          },
        })
      );
    }
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/my-account/:path*',
        destination: '/my-account',
      },
    ];
  },
};

module.exports = nextConfig;

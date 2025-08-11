const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    auth: "http://localhost:4201/remoteEntry.js",
    admin: "http://localhost:4202/remoteEntry.js",
    gps: "http://localhost:4203/remoteEntry.js"
  },
  shared: {
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '20.1.6' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '20.1.6' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '20.1.6' }
  }
});

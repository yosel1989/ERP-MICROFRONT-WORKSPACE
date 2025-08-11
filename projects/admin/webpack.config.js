const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'admin',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './projects/admin/src/app/admin/admin.module.ts'
  },
  shared: {
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '20.1.6' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '20.1.6' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '20.1.6' },
  }

});

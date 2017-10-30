require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(
  {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiHost: process.env.APIHOST || 'localhost',
    apiPort: process.env.APIPORT || 8000,
    app: {
      title: 'Turk System',
      description: 'CSc 332 Turk System - Web Application for Clients and Developers',
      head: {
        titleTemplate: 'Turk System: %s',
        meta: [
          { name: 'description', content: 'CSc 332 Turk System - Web Application for Clients and Developers' },
          { charset: 'utf-8' },
          { property: 'og:site_name', content: 'enzoames' },
          { property: 'og:image', content: '' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:title', content: 'Plugr' },
          { property: 'og:description', content: 'CSc 332 Turk System - Web Application for Clients and Developers' },
          { property: 'og:card', content: 'summary' },
          { property: 'og:site', content: '@enzoames' },
          { property: 'og:creator', content: '@enzames' },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' }
        ]
      }
    }
  },
  environment
);

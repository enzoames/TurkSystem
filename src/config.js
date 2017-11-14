require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  apiHost: process.env.APIHOST || 'http://li1245-102.members.linode.com:8070/',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Turk System',
    description: 'Platform for clients and developers',
    head: {
      titleTemplate: 'Turk System: %s',
      meta: [
        { name: 'description', content: 'Platform for clients and developers' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'Turk System' },
        { property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'Turk System' },
        { property: 'og:description', content: 'Platform for clients and developers' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@erikras' },
        { property: 'og:creator', content: '@erikras' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  },

}, environment);

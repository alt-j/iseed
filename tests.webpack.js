require('core-js/es5');

var context = require.context('./src', true, /\.spec\.js?$/);
context.keys().forEach(context);

require.config({
  paths: {
    'fontawesome': 'vendor/fontawesome/fontawesome.min'
  }
})

require(['fontawesome'], function (fontawesome) {
  console.log('Congrats, Font Awesome is installed using Require.js')
})
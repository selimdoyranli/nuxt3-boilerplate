const vetur = require('@volar-plugins/vetur')

module.exports = {
  plugins: [vetur()],
  services: [require('volar-service-vetur').create()]
}

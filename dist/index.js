
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./logger-for-use-reducer.cjs.production.min.js')
} else {
  module.exports = require('./logger-for-use-reducer.cjs.development.js')
}

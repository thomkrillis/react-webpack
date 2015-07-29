'use strict'

var assert = require('./assert')

exports.run = function() {
  var body = document.body
  assert(body.firstChild.childNodes.length === 2, 'only 2 messages')
}

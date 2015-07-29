'use strict'

var React = require('react')
var Main = require('./Main')

React.render(<Main />, document.body, () => {
  require('./tests').run();
})

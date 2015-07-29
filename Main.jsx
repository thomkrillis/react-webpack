'use strict'

var React = require('react')
var Message = require('./Message')
var Data = require('./Data')

var Container = React.createClass({
  render () {
    var Messages = Data.map(function (message) {
      return (
        <Message key={message.key} user={message.user} message={message.message}/>
      )
    })
    return ( 
      <div>
        {Messages}
      </div>
    )
  }
})

module.exports = Container 

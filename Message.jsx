'use strict'

var Message = React.createClass({
  render () {
    return (
      <div>
        <h1>{this.props.user} - {this.props.message}</h1>
      </div>
    )
  }
})

module.exports = Message

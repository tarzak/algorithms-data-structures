function getShortMessages(messages) {
  return messages.filter(function (d) { 
    return d.message.length < 50
  }).map(function (d) {
    return d.message
  })
}

module.exports = getShortMessages
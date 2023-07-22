module.exports = function reverse (n) {
  return +n.toString().replace(/-/g, "").split('').reverse().join('')
}

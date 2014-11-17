module.exports = function duckCount() {
  return Array.prototype.filter.call(arguments, function (e) {
    return Object.prototype.hasOwnProperty.call(e, 'quack');
  }).length;
}

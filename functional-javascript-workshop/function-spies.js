module.exports = function(target, method) {
  var counter = {count: 0};
  var old = target[method];
  target[method] = function() {
    counter.count++;
    return old.apply(this, arguments);
  }

  return counter;
}

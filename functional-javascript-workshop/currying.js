module.exports = function curry(fn, n) {
  n = (n || fn.length);
  function cur(prev) {
    return function c(current) {
      var a = prev.concat(current);
      if (a.length < n) return cur(a);
      else return fn.apply(this, a);
    }
  }

  return cur([]);
}

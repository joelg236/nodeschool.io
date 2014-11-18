module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(prev, cur, ind, arr) {
    return prev.concat(fn(cur));
  }, []);
}

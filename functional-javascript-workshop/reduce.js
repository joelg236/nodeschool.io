module.exports = function (strs) {
  return strs.reduce(function (p, a) {
    p[a] = (p[a] || 0) + 1;
    return p;
  }, {});
}

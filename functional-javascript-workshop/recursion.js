function reduce(arr, fn, init) {
  return (function r(ind, mov) {
    if (ind > arr.length - 1) return mov;
    return r(ind + 1, fn(mov, arr[ind], ind, arr));
  })(0, init);
}

module.exports = reduce;

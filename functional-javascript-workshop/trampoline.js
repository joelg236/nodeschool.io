function repeat(op, num) {
  var _repeat = function() {
    if (num <= 0) return;
    op();
    return repeat(op, --num);
  };
    
  return _repeat;
}

function trampoline(f) {
  while (f instanceof Function) {
    f = f();
  }
  return f;
}

module.exports = function(op, num) {
  return trampoline(repeat(op, num));
};

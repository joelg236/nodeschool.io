module.exports = function (users) {
  return function(test) {
    return test.every(function(e) {
      return users.some(function(i) {
        return i.id === e.id;
      });
    });
  }
}

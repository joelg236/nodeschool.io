module.exports = function(userIds, load, done) {
  var users = [];
  userIds.forEach(function (u, index) {
    load(u, function(o) {
      users[index] = o;
      if (users.filter(function(value) { return value !== undefined }).length === userIds.length) return done(users);
    });
  });
}

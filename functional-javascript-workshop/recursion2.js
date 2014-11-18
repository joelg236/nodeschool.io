module.exports = function getDependencies(tree, deps) {
  if (!deps) deps = [];
  var dependencies = tree.dependencies || [];
  Object.keys(dependencies).forEach(function (d) {
    var dep = d + '@' + dependencies[d].version
    if (deps.indexOf(dep) === -1)
      deps.push(dep);
    getDependencies(tree.dependencies[d], deps);
  });
  return deps.sort();
}

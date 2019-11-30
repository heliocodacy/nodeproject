exports.pluralize = function (count, singular, plural) {
  if (count === 1) {
    return `${count} ${singular}`;
  }
  plural = plural || `${singular}s`;
  return `${count} ${plural}`;
};

exports.sum = function (a,b) {
  return a+b;
};

exports.mul = function (a,b) {
  return a*b;
};



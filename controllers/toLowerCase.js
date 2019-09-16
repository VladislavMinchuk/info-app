module.exports = function(object) {
  let lowerCaseObj = {};

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      lowerCaseObj[key] = object[key].toLowerCase();
    }
  }

  return lowerCaseObj;
};

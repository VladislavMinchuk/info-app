module.exports = (req, res, next) => {
  const emptyFields = [];

  for (const field in req.body) {
    if (req.body.hasOwnProperty(field)) {
      const element = req.body[field];
      if (!element.length) {
        emptyFields.push(field);
      }
    }
  }
  req.errorFields = emptyFields;
  next();
};

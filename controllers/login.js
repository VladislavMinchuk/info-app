module.exports.getPage = function(req, res) {
  res.status(200).render('form', { page: 'registration' });
};

// module.exports.sendData = function(req, res) {
//   res.json({ title: 'Main' });
// };

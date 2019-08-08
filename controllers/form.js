module.exports.getPage = function(req, res) {
  // let page = 'registration';
  let page = 'login';

  res.status(200).render('form', { page: page });
};

// module.exports.sendData = function(req, res) {
//   res.json({ title: 'Main' });
// };

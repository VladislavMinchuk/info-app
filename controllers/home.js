module.exports.getIndex = function(req, res) {
  res.render('home');
};

module.exports.sendData = function(req, res) {
  res.json({ title: 'Main' });
};

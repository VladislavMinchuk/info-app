module.exports.getIndex = function(req, res) {
  console.log(req.flash);

  res.render('home');
};

module.exports.sendData = function(req, res) {
  res.json({ title: 'Main' });
};

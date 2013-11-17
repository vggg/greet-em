
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Contact Us' });
};


/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Semana de la Música Libre' });
};

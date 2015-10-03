
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var path = require('path');
/**
 * Expose
 */

var User = require('./models/user')

module.exports = function (app) {

  app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
  }); 
    
  app.get('/api/user',function(req,res){
    User.find(function(err,users){
      if (err)
        res.send(err)

      res.json(users)
    })

  });



  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};

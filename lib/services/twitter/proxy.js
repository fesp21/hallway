exports.proxy = function(auth, req, res) {
  var tc = require(__dirname+'/twitter_client.js')(auth.consumerKey, auth.consumerSecret);
  // I think this works only for twitter, oauth1 stuff
  if(req.method.toLowerCase() === 'post') req.query = req.body;
  req.query.token = auth.token;
  var p = tc.apiCall(req.method, req.url, req.query, function(err, js){
      if(err) return res.json(err, 500);
      res.json(js);
  });
};

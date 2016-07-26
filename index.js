express = require("express");
jwt = require("jsonwebtoken");
app = express();

var authenticationMiddleware = function(req, res, next){
  console.log("Je suis le middleware qu'il faut créer");

  var token = req.header("X_AXA_CONTEXT");
  jwt.verify(token, 'secret', function(err, decoded) {
    req.user = decoded;
    console.log(req.user);
    next();
  });

};

app.get("/distrib-customers/:id/projects", authenticationMiddleware, function(req, res){
  res.json("test");
});

app.listen(80);

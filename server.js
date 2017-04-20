
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");

var firebase = require("firebase");
var admin = require("firebase-admin");

var ObjectID = mongodb.ObjectID;


var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});


var serviceAccount = require("./key/HumanServer.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://humanmade-82019.firebaseio.com"
});

var db = admin.database();

// As an admin, the app has access to read and write all data, regardless of Security Rules

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/contacts", function(req, res) {
});

app.post("/contacts", function(req, res) {

  var ref = db.ref("Humanmade");

  console.log("ENTRO AL POST :::::::::  ", req.body.firstName);


  ref.orderByKey().on("child_added", function(snapshot) {
    console.log("esta en QUERY");
    res.status(200).json({"Por ahora vamos bien ": snapshot.key});
  });

  
});

/*  "/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get("/contacts/:id", function(req, res) {
});

app.put("/contacts/:id", function(req, res) {
});

app.delete("/contacts/:id", function(req, res) {
});
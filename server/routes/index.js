var express = require("express");
var router = express.Router();
const ctrlLocations = require("../controllers/location");
const ctrlOthers = require("../controllers/others");

/* GET home page. */
// //where the router looks for the URL(render is the express function for compiling view template to send as HTML response)
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" }); //controller content,basic
// });

// way to get the page
// const homepageController = (req, res) => {
//   res.render("index", { title: "Express" });
// };

/*get home page*/
//passing the function throgh as a callback in the route defenition

// router.get("/", ctrlMain.index);
// /*This code links the route to the new controller by “requiring” the controller file B
// and referencing the controller function in the second parameter of the router.get
// function*/

/* Location Page */
router.get("/", ctrlLocations.homelist);
router.get("/location", ctrlLocations.locationInfo);
router.get("/location/review/new", ctrlLocations.addReview);
/* Others Page */
router.get("/about", ctrlOthers.about);
module.exports = router;

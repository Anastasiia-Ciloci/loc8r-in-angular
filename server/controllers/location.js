/*Get 'home' page */
const homelist = (req, res) => {
  res.render("location-list", { title: "Home" });
};

/*Get 'location' page */
const locationInfo = (req, res) => {
  res.render("index", { title: "Location Info" });
};
/*Get 'add review' page */
const addReview = (req, res) => {
  res.render("index", { title: "Add Review" });
};

module.exports = {
  homelist,
  locationInfo,
  addReview,
};

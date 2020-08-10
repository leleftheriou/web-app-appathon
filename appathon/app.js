const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/appathonDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
//Schema DB
const locationSchema = {
  city: String,
  municipality: String,
  location: String,
  info: String,
};

const Location = mongoose.model("Location", locationSchema);



app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");

});
app.get("/about.html", function(req, res) {

  res.sendFile(__dirname + "/about.html");

});
app.get("/index.html", function(req, res) {

  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {
  const city = req.body.cityName;
  const place = req.body.municipalityName;
  const apiKey = "0164569da2cddbb1fea438ac8d71a757"
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=" + unit + "&appid=" + apiKey;
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

      Location.find({
        'city': req.body.cityName,
        'municipality': req.body.municipalityName
      }, function(err, allLocations) {
        var resultArray = [];
        var addressArray = [];

        if (err) {
          console.log(err);
        } else {
          for (i = 0; i < allLocations.length; i++) {

            resultArray[i] = allLocations[i].info;
            addressArray[i] = allLocations[i].location;

          }
          res.render("results", {
            desc: weatherDescription,
            img: imageURL,
            loc: place,
            tmp: temp,
            allLocations: resultArray,
            address: addressArray,

          });
        };
      });
    });
  });
});
app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

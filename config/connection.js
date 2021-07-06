const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});
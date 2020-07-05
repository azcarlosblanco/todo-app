const mongoose = require("mongoose");

const mongoUrl = `mongodb://localhost:27017/bertoni-carlos-test`;

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.Promise = global.Promise;

mongoose
  .connect(mongoUrl, config)
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch((error) => {
    console.log("Mongodb Connection Failed", error);
  });

module.export = mongoose;

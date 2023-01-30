const mongoose = require("mongoose");

const ConneectDB = async () => {
  const url =
    "mongodb+srv://blackCoffer:blackCoffer@datas.hlgxhof.mongodb.net/blackCoffer?retryWrites=true&w=majority";
  const connected = await mongoose.connect(url);
};

module.exports = ConneectDB;

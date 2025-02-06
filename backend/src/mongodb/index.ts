const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

export const connect = async () => {
  const mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();

  await mongoose.connect(uri);
};

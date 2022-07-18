import mongoose from "mongoose";

beforeAll(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/users_test")
    console.log('conneted to db')
  } catch(error) {
    console.warn("Warning", error)
  }
})

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }

})

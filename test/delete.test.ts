import User from "../src/user";
import mongoose from "mongoose";

describe("Deleting a user",  () => {
  let del: mongoose.Document<any>;

  beforeEach(async () => {
    del = await User.create({ name: "del" });
  });

  test("Model instance remove", async () => {
    await del.delete();
    const deletedUser = await User.findOne({ name: "del" });
    expect(deletedUser).toBeNull();
  });

  test("class Method remove", async () => {
    // Remove a bunch of records with some given criteria
    await User.deleteMany({name: 'del'})
    const deletedUser = await User.findOne({ name: "del" });
    expect(deletedUser).toBeNull();
  });

  test("class method findAndRemove", async () => {
    await User.findOneAndDelete({name: 'del'})
    const deletedUser = await User.findOne({ name: "del" });
    expect(deletedUser).toBeNull();
  });

  test("class method findByIdAndRemove", async () => {
    await User.findByIdAndDelete(del._id)
    const deletedUser = await User.findOne({ name: "del" });
    expect(deletedUser).toBeNull();
  });
});

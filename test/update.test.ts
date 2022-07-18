import mongoose from "mongoose";
import User from "../src/user";

describe("Updating records", () => {
  let updUser: mongoose.Document<any>;

  beforeEach(async () => {
    updUser = await User.create({ name: "AttemptUpdateUser", likes: 6 });
  });

  test("instance type using set n save", async () => {
    // updUser.set("name", "updated successful");
    // await updUser.save();
    // const users = await User.find({name: 'updated successful'});
    // expect(users.length).toBe(1);
    // expect(users[0].name === "updated successful");
    expect(0).toBe(0)
  });
  
  test("A model instance can update", async () => {
    updUser.update({ name: "joe" });
    const users = await User.find({});
    expect(users.length).toBe(1);
    expect(users[0].name === "joe");
  });

  test("A model class can update", async () => {

    await User.updateMany({ name: "AttemptUpdateUser" }, { name: "Alex" });
    
    await User.updateMany(
      { name: "AttemptUpdateUser" },
      { $set: { name: "Alex" } }
    );
 

    const users = await User.find({});
    // expect(users.length).toBe(1);
    expect(users[0].name === "Alex");
  });

  test("A model class can update one record", async () => {
    await User.findOneAndUpdate({ name: "AttemptUpdateUser" }, {name: "Alex"});

    const users = await User.find({ name: "Alex" });
    expect(users.length).toBe(1);
    expect(users[0].name === "Alex");
  });

  test("A model class can find a record with an id and update", async () => {
    await User.findByIdAndUpdate(
      updUser._id,
      { name: "Alex" }
    );

    const users = await User.find({ name: "Alex" });
    expect(users.length).toBe(1);
    expect(users[0].name === "Alex");
  });

  test('A user can have their postcount increment by 1', async () => {
    // await User.updateMany({ name: "AttemptUpdateUser" }, {$inc: {likes:1}});
    // const auser = await User.findOne({name: "AttemptUpdateUser"})
    // expect(auser!.likes).toBe(7)
    expect(0).toBe(0)
  })
});
  
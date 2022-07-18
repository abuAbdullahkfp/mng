import User, { UserSchema } from "../src/user";
import mongoose from 'mongoose'
import { DocumentType } from "@typegoose/typegoose";


describe('Reading users out of the database', () => { 

  let readUser: DocumentType<UserSchema>;
  let one: DocumentType<UserSchema>
  let two: DocumentType<UserSchema>
  let three: DocumentType<UserSchema>

  beforeEach(async () => {
   readUser = await User.create({name: 'readUser'})
   one = await User.create({name: "one"})
   two = await User.create({name: 'two'})
   three = await User.create({name: 'three'})
  })

  test('finds all users with a name of joe', async ()=> {

    const user = await User.find({name: 'readUser'})
    expect(user[0]._id.toString()).toBe(readUser._id.toString())

  }) 

  test("find a user with a particular id", async () => {

    const oneUser = await User.findOne({ _id: readUser._id }); 
    expect(oneUser!.name).toBe('readUser')

  })     

  test('can skip and limit the result set', async () => {
    const users = await User.find({}).sort({name: 1}).skip(1).limit(2)
    if (!users) {
      throw new Error()
    }
    expect(users[0].name).toBe("one") 
    expect(users[1].name).toBe('two')
    expect(users.length).toBe(2)
  })
  
})  
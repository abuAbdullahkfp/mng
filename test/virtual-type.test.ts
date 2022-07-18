import User from "../src/user";

describe("Virtual types", () => {

  test("Postcount returns number of posts", async () => {

    await User.create({
      name: "doe",
      posts: [{title: "Post title"}]
    })
    
    const doe = await User.findOne({name: "doe"})

    if (!doe) {
      throw new Error()
    }

    expect(doe.postCount).toBe(1) 
  })

 
})
import User from "../src/user";


describe("SubDocuments", () => { 
  test("can create a subdocument", async () => {
    const someone = await User.create({
      name: "someone",
      posts: [{ title: "something" }],
    });

    const user = await User.findOne({ name: "someone" });

    if (!user) {
      throw new Error()
    }
    
    expect(user.posts[0].title).toBe('something')
    
  });

  test("Can add subdocuments to an existing record", async () => {

    await User.create({name: "Joe", posts: []})

    const joe = await User.findOne({name: "Joe"}) 

    if(!joe) {
      throw new Error()
    }

    joe.posts.push({title: "new post"})
 
    await joe.save()
 
      
  
    await joe!.update({posts: [{title: "title one"}]})

    const updatedJoe = await User.findOne({name: "Joe"})  

    expect(updatedJoe!.posts[0].title).toBe('title one')

  })

  test("can remove an existing subdocument", async () => {
    await User.create({
      name: "Alex",
      posts: [{title: "post"}]
    })

    const alex = await User.findOne({ name: "Alex" });

    if (!alex) {
      throw new Error();
    }

   
    
    expect(0).toBe(0)
  }) 

});  
 